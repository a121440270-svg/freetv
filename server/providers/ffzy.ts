export interface ProviderVideo {
  id: string
  title: string
  description: string
  poster: string
  category: string
  tags: string[]
  source: string
}

const API_URL = 'https://cj.ffzyapi.com/api.php/provide/vod/'

export async function searchFFZY(keyword: string): Promise<ProviderVideo[]> {
  try {
    const response = await fetch(`${API_URL}?ac=videolist&wd=${encodeURIComponent(keyword)}`)
    const data = await response.json()

    return (data.list || []).map((item: any) => ({
      id: `ffzy-${item.vod_id}`,
      title: item.vod_name,
      description: item.vod_content || '暂无简介',
      poster: item.vod_pic,
      category: item.type_name || '影视',
      tags: [item.vod_area, item.vod_year].filter(Boolean),
      source: item.vod_play_url || '',
    }))
  }
  catch (error) {
    console.error('FFZY search error:', error)
    return []
  }
}
