export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const item = body?.item
  if (!item || !item.id) {
    return sendError(event, createError({ statusCode: 400, statusMessage: '缺少收藏项' }))
  }
  const cookie = useCookie('freeTV_favorites', { sameSite: 'lax', path: '/' })
  const items = cookie.value ? JSON.parse(cookie.value as string) : []
  if (!items.some((video: any) => video.id === item.id)) {
    items.unshift(item)
  }
  cookie.value = JSON.stringify(items.slice(0, 100))
  return { items }
})