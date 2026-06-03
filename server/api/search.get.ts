import { getQuery } from 'h3'
import { searchVideos } from './data'
import { searchAllProviders, searchProvider } from '../providers/provider-manager'

export default defineEventHandler(async (event) => {
  try {
    const q = getQuery(event)
    const query = q.q?.toString() ?? ''
    const provider = q.provider?.toString() ?? ''

    const localResults = searchVideos(query)

    let remoteResults = []
    if (query) {
      if (provider)
        remoteResults = await searchProvider(provider, query)
      else
        remoteResults = await searchAllProviders(query)
    }

    return {
      results: [...remoteResults, ...localResults],
    }
  }
  catch (err: any) {
    // Log server-side and return error details for debugging (temporary)
    console.error('search.get error:', err)
    return {
      error: true,
      message: err?.message || String(err),
      stack: err?.stack || null,
    }
  }
})