import { getQuery } from 'h3'
import { getVideoById } from './data'

export default defineEventHandler((event) => {
  const id = getQuery(event).id?.toString() || ''
  const item = getVideoById(id)
  if (!item) {
    sendError(event, createError({ statusCode: 404, statusMessage: '视频未找到' }))
  }
  return {
    item,
  }
})
