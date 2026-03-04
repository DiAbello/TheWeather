<script lang="ts" setup>
import { useLocation } from "~/src/entities/location/model/use-location";
import { useWeather } from "~/src/entities/weather/model/use-weather";
import HomePage from "~/src/pages/home/components/home-page.vue";
const { currentForecast, loadCurrentForecast, dailyForecast, loadDailyForecast } = useWeather()
const { location } = useLocation()

definePageMeta({
  title: 'Главная'
})
const key = computed(() =>
    location.value ?
        `current:${location.value.lat},${location.value.lon}`
        : 'current:none'
)
await useAsyncData(
    key.value,
    async () => {
      if (!location.value) return null
      await Promise.all([
        loadCurrentForecast(location.value.lat, location.value.lon),
        loadDailyForecast(location.value.lat, location.value.lon),
      ])
      return {
        current: currentForecast.value,
        daily: dailyForecast.value,
      }
    },
    {
      immediate: !!location.value,
      watch: [ location ]
    }
)
</script>

<template>
  <HomePage/>
</template>