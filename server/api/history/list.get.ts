export default defineEventHandler(() => {
  const cookie = useCookie('freeTV_history')
  const items = cookie.value ? JSON.parse(cookie.value as string) : []
  return {
    items,
  }
})