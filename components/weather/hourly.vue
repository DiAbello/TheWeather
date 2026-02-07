<script setup lang="ts">
const props = defineProps<{
  dailyForecast: DailyForecast
}>()
const formattedHourlyForecast = computed(() => getFormattedHourlyForecast(props.dailyForecast))
const slider = useHorizontalSlider({
  itemWidth: 61,
  itemsPerPage: 3,
  totalItems: formattedHourlyForecast.value?.list.length ?? 0
})
</script>

<template>
  <div class="hourly">
      <AppUISliderContent
          :sliderSettings="slider"
      >
        <WeatherHourlyItem
            v-for="(item, index) in formattedHourlyForecast?.list"
            :key="index"
            :weather-item="item"
            :hourly-forecast="formattedHourlyForecast"
            :index="index"
        />
      </AppUISliderContent>
    </div>
</template>

<style scoped lang="scss">
.hourly {
  padding: 20px 24px;
  width: 100%;
  color: var(--primary-text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, sans-serif;
}
</style>
