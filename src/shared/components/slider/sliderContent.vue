<script setup lang="ts">
import sliderButton from '~/src/shared/components/slider/sliderButton.vue'

defineProps<{
  sliderSettings: sliderSettings
}>()
</script>

<template>
  <div class="viewport">
    <div
      class="content"
      :style="{ transform: `translateX(${sliderSettings.translateX.value}px)` }"
    >
      <slot />
    </div>
    <sliderButton
      prev
      :slider-settings="sliderSettings"
    />
    <sliderButton
      next
      :slider-settings="sliderSettings"
    />
  </div>
</template>

<style scoped lang="scss">
.viewport {
  overflow: hidden;
  width: 100%;
  position: relative;
  .content {
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all .4s ease;
  }
}
</style>
