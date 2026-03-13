<script setup lang="ts">
import { useLocation } from '~/src/entities/location/model/use-location'
import { useWeather } from '~/src/entities/weather/model/use-weather'
import EmptyWeatherState from '~/src/widgets/empty-weather-state/empty-weather-state.vue'
import DailyForecastDetails from '~/src/widgets/daily-forecast-details/daily-forecast-details.vue'

const { dailyForecast } = useWeather()
const { location } = useLocation()
</script>

<template>
  <div class="daily">
    <EmptyWeatherState v-if="!location" />
    <div
      v-else
      class="daily__header"
    >
      Погода на 5 дней
    </div>
    <DailyForecastDetails
      v-if="dailyForecast"
      :daily-forecast="dailyForecast"
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
