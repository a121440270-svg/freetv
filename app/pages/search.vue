<template>
  <section class="search-page">
    <div class="search-bar">
      <input
        v-model="query"
        @keyup.enter="search"
        placeholder="输入影片关键词，按回车搜索"
      />

      <select v-model="selectedProvider" aria-label="选择来源">
        <option value="">全部来源</option>
        <option v-for="p in providers" :key="p.key" :value="p.key">{{ p.name }}</option>
      </select>

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
const selectedProvider = ref(route.query.provider?.toString() ?? '')
const providers = ref<Array<{ key: string; name: string }>>([])
const results = ref<any[]>([])

async function loadResults(value = query.value) {
  const params = new URLSearchParams()
  if (value) params.set('q', value)
  if (selectedProvider.value) params.set('provider', selectedProvider.value)
  const response = await $fetch(`/api/search?${params.toString()}`) as any
  results.value = response?.results || []
}

function search() {
  const q: any = { q: query.value }
  if (selectedProvider.value) q.provider = selectedProvider.value
  router.push({ path: '/search', query: q })
}

function toggleFavorite(video: any) {
  if (store.isFavorite(video.id)) {
    store.removeFavorite(video.id)
  } else {
    store.addFavorite(video)
  }
}

watch(
  () => [route.query.q, route.query.provider],
  (vals: any) => {
    query.value = route.query.q?.toString() ?? ''
    selectedProvider.value = route.query.provider?.toString() ?? ''
    loadResults(query.value)
  },
  { immediate: true }
)

// load providers for dropdown
;(async () => {
  try {
    const res = await $fetch('/api/providers') as any
    providers.value = res?.providers || []
  }
  catch (e) {
    console.error('Failed to load providers', e)
  }
})()
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
