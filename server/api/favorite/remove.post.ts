import d1 from '../../utils/d1'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = body?.id
  if (!id) {
    return sendError(event, createError({ statusCode: 400, statusMessage: '缺少视频 id' }))
  }

  const dbResult = await d1.removeFavoriteDb(event, id)
  if (dbResult !== null) {
    return { items: dbResult }
  }

  const cookie = useCookie('freeTV_favorites', { sameSite: 'lax', path: '/' })
  const items = cookie.value ? JSON.parse(cookie.value as string) : []
  const next = items.filter((video: any) => video.id !== id)
  cookie.value = JSON.stringify(next)
  return { items: next }
})