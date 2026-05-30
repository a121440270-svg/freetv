import d1 from '../../utils/d1'

export default defineEventHandler(async (event) => {
  const dbItems = await d1.listHistoryDb(event)
  if (dbItems !== null) {
    return { items: dbItems }
  }

  const cookie = useCookie('freeTV_history')
  const items = cookie.value ? JSON.parse(cookie.value as string) : []
  return {
    items,
  }
})