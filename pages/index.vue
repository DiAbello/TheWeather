<script lang="ts" setup>
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
  <div class="main">
    <WeatherEmptyState v-if="!location"/>
    <WeatherHeader
        v-if="currentForecast"
        :currentForecast="currentForecast"
    />
    <WeatherHourly
      v-if="dailyForecast"
      :dailyForecast="dailyForecast"
    />
    <WeatherDaily
      v-if="dailyForecast"
      :dailyForecast="dailyForecast"
    />
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex: 0 1 67.5%;
  overflow: hidden;
  background-color: var(--blockBackground);
  border-radius: 16px;
}
</style>