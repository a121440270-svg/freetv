<template>
  <section>
    <h1>播放历史</h1>
    <p class="hint">自动记录已观看的视频，支持按时间排序。</p>
    <div v-if="history.length" class="history-list">
      <article v-for="entry in history" :key="entry.id" class="history-card">
        <div>
          <h2>{{ entry.title }}</h2>
          <p>{{ entry.category }} · {{ new Date(entry.timestamp).toLocaleString() }}</p>
        </div>
        <NuxtLink class="watch-link" :to="`/detail/${entry.id}`">继续观看</NuxtLink>
      </article>
    </div>
    <div v-else class="empty-state">暂无播放历史，去搜索并播放一部影片吧。</div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFreeTVStore } from '../stores/useFreeTVStore'
const store = useFreeTVStore()
const history = computed(() => store.history)
</script>

<style scoped>
.history-list {
  display: grid;
  gap: 1rem;
}
.history-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
}
.watch-link {
  color: #0ea5e9;
  text-decoration: none;
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
