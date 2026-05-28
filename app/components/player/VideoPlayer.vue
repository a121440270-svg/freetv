<template>
  <div class="video-player">
    <video
      ref="videoRef"
      class="player"
      controls
      autoplay
      playsinline
      webkit-playsinline
    />

    <div class="player-topbar">
      <button class="control-btn" @click="toggleFullscreen">
        全屏
      </button>
    </div>

    <div v-if="error" class="player-error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Hls from 'hls.js'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { usePlayerStore } from '~/stores/usePlayerStore'

const props = defineProps<{
  url: string
  videoId?: string
  episodeId?: string
}>()

const playerStore = usePlayerStore()

const videoRef = ref<HTMLVideoElement | null>(null)
const error = ref('')

let hls: Hls | null = null

function destroyPlayer() {
  if (hls) {
    hls.destroy()
    hls = null
  }
}

function saveProgress() {
  const video = videoRef.value

  if (!video || !props.videoId)
    return

  playerStore.saveProgress({
    id: props.videoId,
    episodeId: props.episodeId || '',
    currentTime: video.currentTime,
    duration: video.duration,
    updatedAt: Date.now(),
  })
}

function restoreProgress() {
  const video = videoRef.value

  if (!video || !props.videoId)
    return

  const progress = playerStore.getProgress(props.videoId)

  if (
    progress
    && progress.episodeId === props.episodeId
    && progress.currentTime > 10
  ) {
    video.currentTime = progress.currentTime
  }
}

function setupVideoEvents() {
  const video = videoRef.value

  if (!video)
    return

  video.addEventListener('timeupdate', saveProgress)

  video.addEventListener('loadedmetadata', () => {
    restoreProgress()
  })
}

function initPlayer(url: string) {
  destroyPlayer()

  const video = videoRef.value

  if (!video || !url)
    return

  error.value = ''

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url
    setupVideoEvents()
    return
  }

  if (Hls.isSupported()) {
    hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
    })

    hls.loadSource(url)
    hls.attachMedia(video)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      setupVideoEvents()
    })

    hls.on(Hls.Events.ERROR, (_, data) => {
      console.error('HLS Error', data)

      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls?.startLoad()
            break

          case Hls.ErrorTypes.MEDIA_ERROR:
            hls?.recoverMediaError()
            break

          default:
            error.value = '播放失败，请尝试切换线路'
            destroyPlayer()
            break
        }
      }
    })
  }
  else {
    error.value = '当前设备不支持 HLS 播放'
  }
}

async function toggleFullscreen() {
  const video = videoRef.value

  if (!video)
    return

  if (document.fullscreenElement) {
    await document.exitFullscreen()
  }
  else {
    await video.requestFullscreen()
  }
}

watch(() => props.url, (url) => {
  if (url)
    initPlayer(url)
}, {
  immediate: true,
})

onMounted(() => {
  playerStore.loadProgress()

  if (props.url)
    initPlayer(props.url)
})

onBeforeUnmount(() => {
  saveProgress()
  destroyPlayer()
})
</script>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
  background: #000;
  border-radius: 1rem;
  overflow: hidden;
}

.player {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.player-topbar {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.control-btn {
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.88);
  color: #fff;
  cursor: pointer;
}

.player-error {
  padding: 1rem;
  color: #fff;
  background: rgba(239, 68, 68, 0.8);
}
</style>