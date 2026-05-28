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
]
