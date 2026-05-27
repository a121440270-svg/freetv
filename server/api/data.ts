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
  {
    id: '1',
    title: '星际追光者',
    description: '一部科幻冒险大片，讲述宇宙探险和人类希望的故事。',
    poster: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    category: '科幻',
    tags: ['科幻', '冒险', '宇宙'],
    source: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: '2',
    title: '最初的旋律',
    description: '音乐与情感交织的青春成长故事，带来温暖与共鸣。',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    category: '剧情',
    tags: ['剧情', '音乐', '成长'],
    source: 'https://test-streams.mux.dev/test_001/stream.m3u8',
  },
  {
    id: '3',
    title: '极速追击',
    description: '高速动作片，特工英雄在城市中展开绝命追逐。',
    poster: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    category: '动作',
    tags: ['动作', '追逐', '警匪'],
    source: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: '4',
    title: '午夜密令',
    description: '悬疑惊悚剧情，黑夜中的秘密逐渐浮出水面。',
    poster: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80',
    category: '悬疑',
    tags: ['悬疑', '惊悚', '犯罪'],
    source: 'https://test-streams.mux.dev/test_001/stream.m3u8',
  },
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
