<template>
  <article class="video-card">
    <NuxtLink :to="`/detail/${video.id}`" class="poster-link">
      <div class="poster" :style="`background-image: url(${video.poster})`" />
    </NuxtLink>
    <div class="card-body">
      <h3>{{ video.title }}</h3>
      <p class="subtitle">{{ video.category }}</p>
      <div class="card-actions">
        <button @click.prevent="toggleFavorite" class="favorite-btn">
          {{ isFavorite ? '取消收藏' : '收藏' }}
        </button>
        <NuxtLink :to="`/detail/${video.id}`" class="detail-link">详情</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFreeTVStore } from '~/stores/useFreeTVStore'
const props = defineProps<{ video: any }>()
const emit = defineEmits<{'toggleFavorite': (video: any) => void}>()
const store = useFreeTVStore()
const isFavorite = computed(() => store.isFavorite(props.video.id))
function toggleFavorite() {
  emit('toggleFavorite', props.video)
}
</script>

<style scoped>
.video-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
}
.poster-link {
  display: block;
}
.poster {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
}
.card-body {
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
}
.subtitle {
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
}
.card-actions {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}
.favorite-btn,
.detail-link {
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  color: #fff;
  background: #0ea5e9;
  cursor: pointer;
}
.detail-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
}
</style>
