import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useFreeTVStore = defineStore('freeTV', () => {
  const favorites = useLocalStorage<any[]>('freeTV:favorites', [])
  const history = useLocalStorage<any[]>('freeTV:history', [])

  function addFavorite(item: any) {
    if (!favorites.value.some((video) => video.id === item.id)) {
      favorites.value = [item, ...favorites.value]
    }
  }

  function removeFavorite(id: string) {
    favorites.value = favorites.value.filter((video) => video.id !== id)
  }

  function isFavorite(id: string) {
    return favorites.value.some((video) => video.id === id)
  }

  function addHistory(item: any) {
    const next = [{ ...item, timestamp: Date.now() }, ...history.value.filter((entry) => entry.id !== item.id)]
    history.value = next.slice(0, 50)
  }

  return {
    favorites,
    history,
    addFavorite,
    removeFavorite,
    isFavorite,
    addHistory,
  }
})
