export const useWeatherStore = defineStore('weather', () => {
  const currentForecast = ref<CurrentForecast | null>(null)
  const dailyForecast = ref<DailyForecast | null>(null)

  const setCurrentForecast = (data: CurrentForecast) => {
    currentForecast.value = data
  }
  const setDailyForecast = (data: DailyForecast) => {
    dailyForecast.value = data
  }

  return {
    currentForecast,
    dailyForecast,
    setCurrentForecast,
    setDailyForecast,
  }
})
