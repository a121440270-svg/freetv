<template>
  <div class="watch-page" v-if="detail">
    <div class="player-section">
      <VideoPlayer
        :url="currentEpisode?.url || ''"
        :video-id="detail.id"
        :episode-id="currentEpisode?.id"
      />
    </div>

    <div class="content-section">
      <div class="info-panel">
        <img :src="detail.poster" :alt="detail.title" class="poster" />

        <div class="meta">
          <div class="meta-top">
            <span class="source-tag">
              {{ detail.source }}
            </span>
          </div>

          <h1>{{ detail.title }}</h1>

          <p class="description">
            {{ detail.description }}
          </p>

          <div class="tags">
            <span v-for="tag in detail.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="episodes-panel">
        <div class="panel-header">
          <h2>选集播放</h2>

          <span class="episode-count">
            共 {{ detail.episodes.length }} 集
          </span>
        </div>

        <div class="episodes-grid">
          <button
            v-for="episode in detail.episodes"
            :key="episode.id"
            class="episode-btn"
            :class="{
              active: currentEpisode?.id === episode.id,
            }"
            @click="selectEpisode(episode)"
          >
            {{ episode.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePlayerStore } from '~/stores/usePlayerStore'

const route = useRoute()
const playerStore = usePlayerStore()

const { data } = await useFetch(`/api/detail/${route.params.id}`)

const detail = computed(() => data.value?.detail)

const currentEpisode = ref<any>(null)

watch(detail, (value) => {
  if (!value?.episodes?.length)
    return

  const progress = playerStore.getProgress(value.id)

  if (progress) {
    const targetEpisode = value.episodes.find(
      (item: any) => item.id === progress.episodeId,
    )

    if (targetEpisode) {
      currentEpisode.value = targetEpisode
      return
    }
  }

  currentEpisode.value = value.episodes[0]
}, {
  immediate: true,
})

function selectEpisode(episode: any) {
  currentEpisode.value = episode
}
</script>

<style scoped>
.watch-page {
  min-height: 100vh;
  padding: 2rem;
  background:
    radial-gradient(circle at top, rgba(14,165,233,0.18), transparent 35%),
    #020817;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.player-section {
  width: 100%;
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-panel {
  display: flex;
  gap: 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 1.5rem;
  padding: 1.5rem;
  backdrop-filter: blur(12px);
}

.poster {
  width: 260px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.meta-top {
  display: flex;
  align-items: center;
}

.source-tag {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(14,165,233,0.16);
  color: #38bdf8;
}

.meta h1 {
  margin: 0;
  font-size: 2.5rem;
}

.description {
  line-height: 1.9;
  color: rgba(255,255,255,0.72);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tags span {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
}

.episodes-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 1.5rem;
  padding: 1.5rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.panel-header h2 {
  margin: 0;
}

.episode-count {
  color: rgba(255,255,255,0.65);
}

.episodes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.episode-btn {
  border: 1px solid rgba(255,255,255,0.06);
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.06);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.episode-btn:hover {
  transform: scale(1.03);
  background: rgba(14,165,233,0.16);
}

.episode-btn.active {
  background: #0ea5e9;
}

@media (max-width: 768px) {
  .watch-page {
    padding: 1rem;
  }

  .info-panel {
    flex-direction: column;
  }

  .poster {
    width: 100%;
    max-width: 320px;
  }
}
</style>