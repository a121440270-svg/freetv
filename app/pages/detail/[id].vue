<template>
  <section class="detail-page">
    <div class="detail-header">
      <div class="poster" :style="`background-image: url(${video?.poster})`"></div>
      <div class="detail-meta">
        <h1>{{ video?.title }}</h1>
        <p class="category">类别：{{ video?.category }}</p>
        <p>{{ video?.description }}</p>
        <div class="action-row">
          <button @click="toggleFavorite" class="favorite-btn">
            {{ isFavorite ? '取消收藏' : '加入收藏' }}
          </button>
          <NuxtLink to="/favorites" class="secondary-btn">查看收藏</NuxtLink>
        </div>
      </div>
    </div>

    <div class="playback-card">
      <VideoPlayer v-if="video?.source" :src="video.source" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter, computed, watchEffect } from '#imports'
import VideoPlayer from '../../components/VideoPlayer.vue'
import { useFreeTVStore } from '../../stores/useFreeTVStore'

const route = useRoute()
const router = useRouter()
const store = useFreeTVStore()
const id = route.params.id?.toString() || ''

const { data, error } = useAsyncData('detail-' + id, () => $fetch(`/api/detail?id=${encodeURIComponent(id)}`))

if (error.value) {
  router.push('/')
}

const video = data.value?.item || null
const isFavorite = computed(() => video ? store.isFavorite(video.id) : false)

watchEffect(() => {
  if (video) {
    store.addHistory(video)
  }
})

function toggleFavorite() {
  if (!video) return
  if (store.isFavorite(video.id)) {
    store.removeFavorite(video.id)
  } else {
    store.addFavorite(video)
  }
  window?.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.detail-page {
  display: grid;
  gap: 1.5rem;
}
.detail-header {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 320px) 1fr;
}
.poster {
  min-height: 320px;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
}
.detail-meta h1 {
  margin: 0 0 0.75rem;
}
.category {
  color: #7dd3fc;
  margin: 0.5rem 0 1rem;
}
.action-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.favorite-btn,
.secondary-btn {
  padding: 0.85rem 1.25rem;
  border-radius: 999px;
  border: none;
  color: #fff;
  background: #0ea5e9;
  text-decoration: none;
  cursor: pointer;
}
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
}
.playback-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
}
</style>
