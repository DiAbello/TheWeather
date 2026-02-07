<script setup lang="ts">
defineProps<{
  next?: boolean,
  prev?: boolean,
  sliderSettings: sliderSettings
}>()
</script>

<template>
  <button
      class="hourly__nav hourly__nav--left"
      @click="sliderSettings.prev"
      :disabled="sliderSettings.currentIndex.value === 0"
      v-if="prev"
  >
    ‹
  </button>
  <button
      v-if="next"
      class="hourly__nav hourly__nav--right"
      @click="sliderSettings.next"
      :disabled="sliderSettings.currentIndex.value >= sliderSettings.maxIndex.value"
  >
    ›
  </button>
</template>

<style scoped lang="scss">
.hourly__nav {
  user-select: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;
  background: rgba(30, 30, 30, 0.65);
  backdrop-filter: blur(6px);

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
}

.hourly__nav--left {
  left: 8px;
}

.hourly__nav--right {
  right: 8px;
}
</style>