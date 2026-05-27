<template>
  <section class="search-page">
    <div class="search-bar">
      <input
        v-model="query"
        @keyup.enter="search"
        placeholder="输入影片关键词，按回车搜索"
      />
      <button @click="search">搜索</button>
    </div>

    <div class="search-meta">
      <span>搜索结果：{{ results.length }}</span>
    </div>

    <div class="result-grid">
      <VideoCard
        v-for="item in results"
        :key="item.id"
        :video="item"
        @toggleFavorite="toggleFavorite"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from '#imports'
import { ref, watch, computed } from 'vue'
import VideoCard from '../components/VideoCard.vue'
import { useFreeTVStore } from '../stores/useFreeTVStore'

const store = useFreeTVStore()
const route = useRoute()
const router = useRouter()
const query = ref(route.query.q?.toString() ?? '')
const results = ref<any[]>([])

async function loadResults(value = query.value) {
  const params = new URLSearchParams()
  if (value) params.set('q', value)
  const response = await $fetch(`/api/search?${params.toString()}`) as any
  results.value = response?.results || []
}

function search() {
  router.push({ path: '/search', query: { q: query.value } })
}

function toggleFavorite(video: any) {
  if (store.isFavorite(video.id)) {
    store.removeFavorite(video.id)
  } else {
    store.addFavorite(video)
  }
}

watch(
  () => route.query.q,
  (value: string | string[] | undefined) => {
    query.value = value?.toString() ?? ''
    loadResults(query.value)
  },
  { immediate: true }
)
</script>

<style scoped>
.search-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.search-bar {
  display: flex;
  gap: 0.75rem;
}
.search-bar input {
  flex: 1;
  padding: 0.9rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #fff;
}
.search-bar button {
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  border: none;
  background: #22c55e;
  color: #fff;
  cursor: pointer;
}
.search-meta {
  color: rgba(255, 255, 255, 0.7);
}
.result-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
