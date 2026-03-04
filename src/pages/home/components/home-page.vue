<script lang="ts" setup>
import { useLocation } from "~/src/entities/location/model/use-location";
import { useWeather } from "~/src/entities/weather/model/use-weather";
import EmptyWeatherState from "~/src/widgets/empty-weather-state/empty-weather-state.vue";
import CurrentWeather from "~/src/widgets/current-weather/current-weather.vue";
import HourlyForecast from "~/src/widgets/hourly-forecast/hourly-forecast.vue";
import DailyForecast from "~/src/widgets/daily-forecast/daily-forecast.vue";

const { currentForecast, dailyForecast} = useWeather()
const { location } = useLocation()
</script>

<template>
  <div class="main">
    <EmptyWeatherState v-if="!location"/>
    <CurrentWeather
        v-if="currentForecast"
        :currentForecast="currentForecast"
    />
    <HourlyForecast
        v-if="dailyForecast"
        :dailyForecast="dailyForecast"
    />
    <DailyForecast
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