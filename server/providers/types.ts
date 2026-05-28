export interface VideoItem {
  id: string
  source: string
  sourceId: string

  title: string
  poster: string
  description: string

  category?: string
  tags?: string[]

  year?: string
  area?: string
}

export interface EpisodeItem {
  id: string
  name: string
  url: string
}

export interface VideoDetail extends VideoItem {
  episodes: EpisodeItem[]
}

export interface VideoProvider {
  search(keyword: string): Promise<VideoItem[]>
  detail(id: string): Promise<VideoDetail | null>
}
