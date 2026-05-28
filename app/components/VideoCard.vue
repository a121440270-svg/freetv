<template>
  <article class="video-card">
    <NuxtLink :to="`/detail/${video.id}`" class="poster-link">
      <div class="poster" :style="`background-image: url(${video.poster})`">
        <div class="overlay">
          <span class="badge">{{ video.category }}</span>
          <button @click.prevent="toggleFavorite" class="favorite-btn">
            {{ isFavorite ? '已收藏' : '收藏' }}
          </button>
        </div>

        <div class="play-mask">
          <span class="play-button">▶ 立即播放</span>
        </div>
      </div>
    </NuxtLink>

    <div class="card-body">
      <h3>{{ video.title }}</h3>
      <p class="description">{{ video.description }}</p>

      <div class="tags">
        <span v-for="tag in video.tags?.slice(0, 3)" :key="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFreeTVStore } from '~/stores/useFreeTVStore'

const props = defineProps<{ video: any }>()
const emit = defineEmits<{ 'toggleFavorite': (video: any) => void }>()

const store = useFreeTVStore()
const isFavorite = computed(() => store.isFavorite(props.video.id))

function toggleFavorite() {
  emit('toggleFavorite', props.video)
}
</script>

<style scoped>
.video-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;
  background: #0f172a;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.video-card:hover {
  transform: scale(1.03);
  box-shadow: 0 18px 40px rgba(14, 165, 233, 0.25);
}

.poster-link {
  display: block;
}

.poster {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  background: linear-gradient(to bottom, rgba(0,0,0,0.65), transparent 40%);
}

.badge {
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.85);
  font-size: 0.85rem;
}

.favorite-btn {
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(14, 165, 233, 0.92);
  color: #fff;
  cursor: pointer;
}

.play-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  background: rgba(0, 0, 0, 0.4);
}

.video-card:hover .play-mask {
  opacity: 1;
}

.play-button {
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: #0ea5e9;
  font-weight: 600;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem;
}

.card-body h3 {
  margin: 0;
  font-size: 1.1rem;
}

.description {
  margin: 0;
  line-height: 1.5;
  color: rgba(255,255,255,0.72);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags span {
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  font-size: 0.8rem;
}
</style>