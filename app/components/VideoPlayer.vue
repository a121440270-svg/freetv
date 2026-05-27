<template>
  <div class="video-player">
    <video ref="videoRef" controls preload="metadata" class="native-player" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Hls from 'hls.js'
const props = defineProps<{ src: string }>()
const videoRef = ref<HTMLVideoElement | null>(null)
let hls: Hls | null = null

onMounted(() => {
  if (!videoRef.value || !props.src) return
  if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoRef.value.src = props.src
    return
  }

  if (Hls.isSupported()) {
    hls = new Hls()
    hls.loadSource(props.src)
    hls.attachMedia(videoRef.value)
  }
})

onBeforeUnmount(() => {
  hls?.destroy()
})
</script>

<style scoped>
.video-player {
  width: 100%;
  background: #000;
  border-radius: 1rem;
  overflow: hidden;
}
.native-player {
  width: 100%;
  min-height: 320px;
  background: #000;
}
</style>
