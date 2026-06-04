export interface VideoEntity {
  id?: number
  source: string
  vod_id: string
  title: string
  cover?: string
  description?: string
  type?: string
  year?: string
  area?: string
  remark?: string
  created_at?: string
  updated_at?: string
}

export interface EpisodeEntity {
  id?: number
  video_id: number
  line_name?: string
  episode_name: string
  play_url: string
  episode_index?: number
  source_type?: string // raw | proxy | resolved
  created_at?: string
}

export interface ProviderEntity {
  id?: number
  name: string
  api_url: string
  enabled: number
  created_at?: string
}

export interface SyncLogEntity {
  id?: number
  provider_name: string
  status: string
  message?: string
  created_at?: string
}
