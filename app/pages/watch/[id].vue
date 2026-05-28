<template>
  <div class="watch-page" v-if="detail">
    <div class="player-section">
      <VideoPlayer :url="currentEpisode?.url || ''" />
    </div>

    <div class="content-section">
      <div class="info-panel">
        <img :src="detail.poster" :alt="detail.title" class="poster" />

        <div class="meta">
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
        <h2>选集播放</h2>

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

const route = useRoute()

const { data } = await useFetch(`/api/detail/${route.params.id}`)

const detail = computed(() => data.value?.detail)

const currentEpisode = ref<any>(null)

watch(detail, (value) => {
  if (value?.episodes?.length) {
    currentEpisode.value = value.episodes[0]
  }
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
  background: #020817;
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
  border-radius: 1rem;
  padding: 1.5rem;
}

.poster {
  width: 240px;
  border-radius: 1rem;
  object-fit: cover;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.meta h1 {
  margin: 0;
  font-size: 2rem;
}

.description {
  line-height: 1.8;
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
  border-radius: 1rem;
  padding: 1.5rem;
}

.episodes-panel h2 {
  margin-top: 0;
}

.episodes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.episode-btn {
  border: none;
  padding: 1rem;
  border-radius: 0.85rem;
  background: rgba(255,255,255,0.08);
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.episode-btn:hover {
  transform: scale(1.03);
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