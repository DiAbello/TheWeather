export const useWeatherStore = defineStore('weather', () => {

    const currentForecast = ref<CurrentForecast | null>(null)
    const searchedCountries = ref<SearchedCountries[] | null>([])
    const dailyForecast = ref<DailyForecast | null>(null)

    const setSearchedCountries = (data: SearchedCountries[]) => {
        searchedCountries.value = data
    }
    const setCurrentForecast = (data: CurrentForecast) => {
        currentForecast.value = data
    }
    const setDailyForecast = (data: DailyForecast) => {
        dailyForecast.value = data
    }

    const clearSearchedCountries = () => {
        searchedCountries.value = null
    }

    return {
        searchedCountries,
        currentForecast,
        dailyForecast,
        setCurrentForecast,
        setSearchedCountries,
        clearSearchedCountries,
        setDailyForecast
    }
})