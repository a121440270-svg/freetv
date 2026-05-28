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

    <div v-if="error" class="player-error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Hls from 'hls.js'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  url: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const error = ref('')

let hls: Hls | null = null

function destroyPlayer() {
  if (hls) {
    hls.destroy()
    hls = null
  }
}

function initPlayer(url: string) {
  destroyPlayer()

  const video = videoRef.value

  if (!video || !url)
    return

  error.value = ''

  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url
    return
  }

  if (Hls.isSupported()) {
    hls = new Hls({
      enableWorker: true,
    })

    hls.loadSource(url)
    hls.attachMedia(video)

    hls.on(Hls.Events.ERROR, (_, data) => {
      console.error('HLS Error', data)

      if (data.fatal) {
        error.value = '播放失败，请尝试切换线路'
      }
    })
  }
  else {
    error.value = '当前设备不支持 HLS 播放'
  }
}

watch(() => props.url, (url) => {
  if (url)
    initPlayer(url)
}, {
  immediate: true,
})

onMounted(() => {
  if (props.url)
    initPlayer(props.url)
})

onBeforeUnmount(() => {
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

.player-error {
  padding: 1rem;
  color: #fff;
  background: rgba(239, 68, 68, 0.8);
}
</style>