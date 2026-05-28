import { defineStore } from 'pinia'

interface PlayProgress {
  id: string
  episodeId: string
  currentTime: number
  duration: number
  updatedAt: number
}

export const usePlayerStore = defineStore('player', {
  state: () => ({
    progressMap: {} as Record<string, PlayProgress>,
  }),

  actions: {
    saveProgress(data: PlayProgress) {
      this.progressMap[data.id] = data

      if (process.client) {
        localStorage.setItem('freetv-player-progress', JSON.stringify(this.progressMap))
      }
    },

    loadProgress() {
      if (!process.client)
        return

      const raw = localStorage.getItem('freetv-player-progress')

      if (raw) {
        this.progressMap = JSON.parse(raw)
      }
    },

    getProgress(id: string) {
      return this.progressMap[id]
    },
  },
})