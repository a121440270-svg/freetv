export default defineEventHandler(() => {
  const cookie = useCookie('freeTV_favorites')
  return {
    items: cookie.value ? JSON.parse(cookie.value as string) : [],
  }
})
