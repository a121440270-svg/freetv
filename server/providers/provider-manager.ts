import { providers } from './config'
import { createAppleCmsProvider } from './appleCmsProvider'

const providerMap: Record<string, any> = {}

for (const p of providers) {
  if (p.type === 'apple-cms') {
    providerMap[p.key] = createAppleCmsProvider(p.api, p.key)
  }
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

export async function searchProvider(key: string, keyword: string) {
  const adapter = providerMap[key]

  if (!adapter)
    return []

  return adapter.search(keyword)
}

export async function getVideoDetail(id: string) {
  const providerKey = id.split('-')[0]

  const adapter = providerMap[providerKey]

  if (!adapter)
    return null

  return adapter.detail(id)
}
