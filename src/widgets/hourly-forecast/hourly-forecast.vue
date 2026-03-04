<script setup lang="ts">
import SliderContent from "~/src/shared/components/slider/sliderContent.vue";
import HourlyItem from "~/src/entities/weather/components/hourly-item.vue";
import { useHorizontalSlider } from "~/src/shared/lib/useHorizontalSlider/useHorizontalSlider";
import { getFormattedHourlyForecast } from "~/src/entities/weather/lib/forecast/get-formatted-hourly-forecast";

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
    <SliderContent
        :sliderSettings="slider"
    >
      <HourlyItem
          v-for="(item, index) in formattedHourlyForecast?.list"
          :key="index"
          :weather-item="item"
          :hourly-forecast="formattedHourlyForecast"
          :index="index"
      />
    </SliderContent>
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
