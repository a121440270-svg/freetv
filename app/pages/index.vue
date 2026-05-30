<template>
  <section class="page-shell">
    <div class="hero">
      <div>
        <h1>freeTV 智能电视影视聚合</h1>
        <p>聚合热门影视资源，统一搜索、播放、收藏与历史记录。</p>
      </div>
      <NuxtLink class="primary-button" to="/search">开始搜索</NuxtLink>
    </div>

    <div class="grid-layout">
      <div class="card">
        <h2>热门推荐</h2>
        <div class="list-grid">
          <VideoCard
            v-for="item in trending"
            :key="item.id"
            :video="item"
            @toggleFavorite="toggleFavorite"
          />
        </div>
      </div>

      <div class="card compact">
        <h2>功能模块</h2>
        <ul>
          <li>搜索聚合</li>
          <li>视频详情与播放</li>
          <li>收藏与历史</li>
          <li>Cloudflare Workers API</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFreeTVStore } from '../stores/useFreeTVStore'
import VideoCard from '../components/VideoCard.vue'

const store = useFreeTVStore()
const { data } = useAsyncData('trending', () => $fetch('/api/trending'))
const trending = computed(() => data.value?.results || [])

function toggleFavorite(video: any) {
  if (store.isFavorite(video.id)) {
    store.removeFavorite(video.id)
  } else {
    store.addFavorite(video)
  }
}
</script>

<style scoped>
.page-shell {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
}
.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
}
.hero p {
  margin: 0.75rem 0 0;
  line-height: 1.65;
  max-width: 42rem;
}
.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  background: #0ea5e9;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}
.grid-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}
.card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
}
.card.compact ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}
.card.compact li {
  padding: 0.75rem 1rem;
  border-radius: 0.85rem;
  background: rgba(255, 255, 255, 0.04);
}
.list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}
</style>
