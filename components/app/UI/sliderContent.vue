<script setup lang="ts">
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
      <slot/>
    </div>
    <AppUISliderButton
        :prev="true"
        :sliderSettings="sliderSettings"
    />
    <AppUISliderButton
        :next="true"
        :sliderSettings="sliderSettings"
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