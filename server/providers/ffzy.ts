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
        episodes: parseEpisodes(item.vod_play_url),
      }
    }
    catch (error) {
      console.error('FFZY detail error:', error)
      return null
    }
  },
}
