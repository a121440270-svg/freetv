import { providers } from './config'
import { ffzyProvider } from './ffzy'

const providerMap: Record<string, any> = {
  ffzy: ffzyProvider,
}

export async function searchAllProviders(keyword: string) {
  const enabledProviders = providers.filter(item => item.enabled)

  const results = await Promise.all(
    enabledProviders.map(async (provider) => {
      const adapter = providerMap[provider.key]

      if (!adapter)
        return []

      return adapter.search(keyword)
    }),
  )

  return results.flat()
}

export async function getVideoDetail(id: string) {
  const providerKey = id.split('-')[0]

  const adapter = providerMap[providerKey]

  if (!adapter)
    return null

  return adapter.detail(id)
}
