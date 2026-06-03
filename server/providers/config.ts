export interface ProviderConfig {
  key: string
  name: string
  api: string
  type: 'apple-cms'
  enabled: boolean
  weight: number
}

export const providers: ProviderConfig[] = [
  {
    key: 'ffzy',
    name: '非凡资源',
    api: 'https://cj.ffzyapi.com/api.php/provide/vod/',
    type: 'apple-cms',
    enabled: true,
    weight: 10,
  },
  // 示例条目：请替换为有效的聚合接口 URL 并将 enabled 设为 true
  {
    key: 'wujin',
    name: '无尽聚合',
    api: 'https://api.wujinapi.com/api.php/provide/vod/',
    type: 'apple-cms',
    enabled: true,
    weight: 8,
  },
  {
    key: 'subo',
    name: 'Subo 采集',
    api: 'https://subocaiji.com/api.php/provide/vod/',
    type: 'apple-cms',
    enabled: true,
    weight: 7,
  },
  {
    key: 'yunhtml99',
    name: 'yun.html99 采集 (未验证)',
    api: 'https://yun.html99.cn/api.php/provide/vod/',
    type: 'apple-cms',
    enabled: false,
    weight: 5,
  },
]
