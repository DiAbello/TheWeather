<script setup lang="ts">
import { getFormattedDeepDailyForecast } from '~/src/entities/weather/lib/forecast/get-formatted-deep-daily-forecast'
import DailyDeepItem from '~/src/entities/weather/components/daily-deep-item.vue'

const props = defineProps<{
  dailyForecast: DailyForecast
}>()
const formattedDeepDailyForecast = computed(() => getFormattedDeepDailyForecast(props?.dailyForecast))
</script>

<template>
  <div class="daily__content">
    <DailyDeepItem
      v-for="(item, index) in formattedDeepDailyForecast?.list"
      :key="index"
      :index="index"
      :weather-item="item"
      :daily-forecast="formattedDeepDailyForecast"
    />
  </div>
</template>

<style scoped lang="scss">
.daily__content {
  margin-top: -16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
