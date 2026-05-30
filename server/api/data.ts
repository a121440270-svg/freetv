export interface VideoItem {
  id: string
  title: string
  description: string
  poster: string
  category: string
  tags: string[]
  source: string
}

export const videos: VideoItem[] = [
  // 内置样例已移除 — 由 provider 聚合或外部数据填充
]

export function searchVideos(query: string) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) {
    return videos
  }

  return videos.filter((item) => {
    return [item.title, item.category, ...item.tags].some((value) =>
      value.toLowerCase().includes(normalized),
    )
  })
}

export function getVideoById(id: string) {
  return videos.find((item) => item.id === id) || null
}
