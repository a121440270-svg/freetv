import d1 from '../../utils/d1'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const item = body?.item
  if (!item || !item.id) {
    return sendError(event, createError({ statusCode: 400, statusMessage: '缺少历史记录项' }))
  }

  const dbResult = await d1.saveHistoryDb(event, item)
  if (dbResult !== null) {
    return { items: dbResult }
  }

  const cookie = useCookie('freeTV_history', { sameSite: 'lax', path: '/' })
  const items = cookie.value ? JSON.parse(cookie.value as string) : []
  const next = [{ ...item, timestamp: Date.now() }, ...items.filter((entry: any) => entry.id !== item.id)]
  cookie.value = JSON.stringify(next.slice(0, 50))
  return { items: next }
})