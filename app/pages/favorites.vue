<template>
  <section>
    <h1>我的收藏</h1>
    <p class="hint">已收藏的视频将显示在这里，点击播放详情页继续观看。</p>
    <div v-if="favorites.length" class="result-grid">
      <VideoCard
        v-for="item in favorites"
        :key="item.id"
        :video="item"
        @toggleFavorite="toggleFavorite"
      />
    </div>
    <div v-else class="empty-state">暂无收藏，去搜索影片并加入收藏吧。</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFreeTVStore } from '../stores/useFreeTVStore'
import VideoCard from '../components/VideoCard.vue'
const store = useFreeTVStore()
const favorites = computed(() => store.favorites)

function toggleFavorite(video: any) {
  store.removeFavorite(video.id)
}
</script>

<style scoped>
.result-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.empty-state,
.hint {
  color: rgba(255, 255, 255, 0.7);
}
.empty-state {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1rem;
}
</style>
