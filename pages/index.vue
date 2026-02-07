<script lang="ts" setup>
const { currentForecast, loadCurrentForecast, dailyForecast, loadDailyForecast } = useWeather()
const { location } = useLocation()

const key = computed(() =>
    location.value ?
        `current:${location.value.lat},${location.value.lon}`
        : 'current:none'
)
await useAsyncData(
    key.value,
    async () => {
      await loadCurrentForecast(location.value!.lat, location.value!.lon)
      await loadDailyForecast(location.value!.lat, location.value!.lon)
    },
    {
      immediate: !!location.value,
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