<script setup lang="ts">
const { dailyForecast, loadDailyForecast } = useWeather()
const { location } = useLocation()

definePageMeta({
  title: 'Прогноз на 5 дней'
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
        loadDailyForecast(location.value.lat, location.value.lon),
      ])
      return {
        daily: dailyForecast.value,
      }
    },
    {
      immediate: !!location.value,
    }
)
</script>

<template>
  <div class="daily">
    <div class="daily__header">
      Погода на 5 дней
    </div>
    <WeatherDailyDeep
        v-if="dailyForecast"
        :dailyForecast="dailyForecast"
    />
  </div>
</template>

<style scoped lang="scss">
.daily {
  flex: 0 1 67.5%;
  overflow: hidden;
  border-radius: 16px;
  &__header {
    background-color: var(--contrastBackground);
    padding: 20px 24px 36px 24px;
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-text);
  }
}
</style>