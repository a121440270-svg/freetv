import d1 from '../../utils/d1'

export default defineEventHandler(async (event) => {
  const dbItems = await d1.listFavoritesDb(event)
  if (dbItems !== null) {
    return { items: dbItems }
  }

  const cookie = useCookie('freeTV_favorites')
  return {
    items: cookie.value ? JSON.parse(cookie.value as string) : [],
  }
})
