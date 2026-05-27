import { searchVideos } from './data'
import { getQuery } from 'h3'

export default defineEventHandler((event) => {
  const query = getQuery(event).q?.toString() ?? ''
  const results = searchVideos(query)
  return {
    results,
  }
})
