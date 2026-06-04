import type {
  VideoDetail,
  VideoItem,
  VideoProvider,
  EpisodeItem,
} from './types'

const API_URL = 'https://cj.ffzyapi.com/api.php/provide/vod/'

async function tryFetch(url: string, options: any = {}, retries = 3, timeout = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController()
      const id = setTimeout(() => controller.abort(), timeout)

      const defaultHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
        Referer: 'https://cj.ffzyapi.com/',
        Accept: 'application/json, text/javascript, */*; q=0.01',
      }

      const mergedOptions = {
        ...options,
        headers: {
          ...defaultHeaders,
          ...(options && options.headers ? options.headers : {}),
        },
        signal: controller.signal,
      }

      const res = await fetch(url, mergedOptions)
      clearTimeout(id)
      if (!res.ok) {
        const text = await res.text().catch(() => '')
        // Give extra logging when WAF/403 occurs so it's easier to diagnose
        if (res.status === 403) {
          console.error(`ffzy tryFetch 403 response for ${url}:`, text.slice(0, 200))
        }
        throw new Error(`Fetch failed with status ${res.status} - ${text}`)
      }
      return res
    }
    catch (err) {
      console.error(`ffzy tryFetch attempt ${i + 1} failed for ${url}:`, err?.message || err)
      if (i === retries - 1)
        throw err
      // backoff
      await new Promise((r) => setTimeout(r, 500 * (i + 1)))
    }
  }
}

function parseEpisodes(playUrl: string): EpisodeItem[] {
  if (!playUrl)
    return []

  return playUrl
    .split('#')
    .map((item, index) => {
      const [name, url] = item.split('$')

      return {
        id: `${index}`,
        name: name || `第${index + 1}集`,
        url: url || '',
      }
    })
    .filter((item) => item.url)
}

export const ffzyProvider: VideoProvider = {
  async search(keyword: string): Promise<VideoItem[]> {
    try {
      const response = await tryFetch(`${API_URL}?ac=videolist&wd=${encodeURIComponent(keyword)}`)
      const data = await response.json()

      return (data.list || []).map((item: any) => ({
        id: `ffzy-${item.vod_id}`,
        source: 'ffzy',
        sourceId: item.vod_id,
        title: item.vod_name,
        description: item.vod_content || '暂无简介',
        poster: item.vod_pic,
        category: item.type_name || '影视',
        tags: [item.vod_area, item.vod_year].filter(Boolean),
        year: item.vod_year,
        area: item.vod_area,
      }))
    }
    catch (error) {
      console.error('FFZY search error:', error)
      return []
    }
  },

  async detail(id: string): Promise<VideoDetail | null> {
    try {
      const sourceId = id.replace('ffzy-', '')

      const response = await tryFetch(`${API_URL}?ac=detail&ids=${sourceId}`)
      const data = await response.json()

      const item = data.list?.[0]

      if (!item)
        return null

      // 优先选择包含媒体扩展的段（vod_play_url 可能由多个段用 $$$ 分隔）
      let episodes: EpisodeItem[] = []
      try {
        const segments = (item.vod_play_url || '').split('$$$')
        // 选择首个包含媒体扩展的段（m3u8/mp4/flv/ts/mkv），否则使用第一个段
        const preferred = segments.find(s => /\.(m3u8|mp4|flv|ts|mkv)/i.test(s)) || segments[0] || ''
        episodes = parseEpisodes(preferred)
      } catch (e) {
        episodes = parseEpisodes(item.vod_play_url)
      }

      // 尝试将分享页或中间页解析为真实的媒体链接（支持多种格式）
      async function resolveToMedia(possibleUrl: string) {
        if (!possibleUrl) return possibleUrl
        const lower = possibleUrl.toLowerCase()
        // 如果已经包含常见媒体扩展，直接返回
        if (lower.includes('.m3u8') || lower.includes('.mp4') || lower.includes('.flv') || lower.includes('.ts') || lower.includes('.mkv')) {
          return possibleUrl
        }

        try {
          const res = await tryFetch(possibleUrl, { referer: 'https://cj.ffzyapi.com/' }, 2, 8000)
          const text = await res.text().catch(() => '')
          // 优先匹配常见媒体文件扩展
          const mediaMatch = text.match(/https?:\/\/[^"'\s]+?\.(m3u8|mp4|flv|ts|mkv)(?:\?[^"'\s]*)?/i)
          if (mediaMatch) return mediaMatch[0]
          // 若没有找到带扩展的链接，退而求其次匹配任意 http(s) 链接
          const anyLink = text.match(/https?:\/\/[^"'\s]+/i)
          if (anyLink) return anyLink[0]
        }
        catch (e) {
          // ignore
        }
        return possibleUrl
      }

      // 并行解析 episodes 中的链接（将非明确媒体链接解析为可播放的媒体链接）
      episodes = await Promise.all(episodes.map(async (ep) => ({ ...ep, url: await resolveToMedia(ep.url) })))

      return {
        id: `ffzy-${item.vod_id}`,
        source: 'ffzy',
        sourceId: item.vod_id,
        title: item.vod_name,
        description: item.vod_content || '暂无简介',
        poster: item.vod_pic,
        category: item.type_name || '影视',
        tags: [item.vod_area, item.vod_year].filter(Boolean),
        year: item.vod_year,
        area: item.vod_area,
        episodes,
      }
    }
    catch (error) {
      console.error('FFZY detail error:', error)
      return null
    }
  },
}
