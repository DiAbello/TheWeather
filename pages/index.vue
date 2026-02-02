<script lang="ts" setup>
const { currentBroadcast, loadCurrentBroadcast, dailyBroadcast, loadDailyBroadcast } = useWeather()
const { location } = useLocation()


const key = computed(() =>
    location.value ?
        `current:${location.value.lat},${location.value.lon}`
        : 'current:none'
)
await useAsyncData(
    key.value,
    async () => {
      await loadCurrentBroadcast(location.value!.lat, location.value!.lon)
      await loadDailyBroadcast(location.value!.lat, location.value!.lon)
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
        v-else-if="currentBroadcast"
        :currentBroadcast="currentBroadcast"
        class="main-block"
    />
    <WeatherHourly
      v-if="dailyBroadcast"
      :dailyBroadcast="dailyBroadcast"
      class="main-block"
    />
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex: 0 1 67.5%;
  .main-block {
    padding: 20px 24px;
    border-radius: 16px;
    width: 100%;
    background-color: #161617;
    color: #ffffff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, sans-serif;
  }
}
</style>