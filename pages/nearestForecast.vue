<script setup lang="ts">
import { useLocation } from '~/src/entities/location/model/use-location'
import { useWeather } from '~/src/entities/weather/model/use-weather'
import NearestForecastPage from '~/src/pages/nearest-forecast/components/nearest-forecast-page.vue'

const { dailyForecast, loadDailyForecast } = useWeather()
const { location } = useLocation()

definePageMeta({
  title: 'Прогноз на 5 дней',
})
const key = computed(() =>
  location.value
    ? `current:${location.value.lat},${location.value.lon}`
    : 'current:none',
)
await useAsyncData(
  key.value,
  async () => {
    if (!location.value) return null
    await Promise.allSettled([
      loadDailyForecast(location.value.lat, location.value.lon),
    ])
    return {
      daily: dailyForecast.value,
    }
  },
  {
    immediate: !!location.value,
    watch: [location],
    lazy: true,
  },
)
</script>

<template>
  <NearestForecastPage />
</template>
