import { getQuery } from 'h3'
import { searchVideos } from './data'
import { searchFFZY } from '../providers/ffzy'

export default defineEventHandler(async (event) => {
  const query = getQuery(event).q?.toString() ?? ''

  const localResults = searchVideos(query)

  const remoteResults = query
    ? await searchFFZY(query)
    : []

  const results = [...remoteResults, ...localResults]

  return {
    results,
  }
})