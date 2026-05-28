import { getQuery } from 'h3'
import { searchVideos } from './data'
import { searchAllProviders } from '../providers/provider-manager'

export default defineEventHandler(async (event) => {
  const query = getQuery(event).q?.toString() ?? ''

  const localResults = searchVideos(query)

  const remoteResults = query
    ? await searchAllProviders(query)
    : []

  return {
    results: [...remoteResults, ...localResults],
  }
})