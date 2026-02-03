
export const useWeatherStore = defineStore('weather', () => {

    const currentBroadcast = ref<CurrentBroadcast | null>(null)
    const searchedCountries = ref<SearchedCountries[] | null>([])
    const dailyBroadcast = ref<DailyBroadcast | null>(null)

    const setSearchedCountries = (data: SearchedCountries[]) => {
        searchedCountries.value = data
    }
    const setCurrentBroadcast = (data: CurrentBroadcast) => {
        currentBroadcast.value = data
    }
    const setDailyBroadcast = (data: DailyBroadcast) => {
        dailyBroadcast.value = data
    }

    const clearSearchedCountries = () => {
        searchedCountries.value = null
    }

    return {
        searchedCountries,
        currentBroadcast,
        dailyBroadcast,
        setCurrentBroadcast,
        setSearchedCountries,
        clearSearchedCountries,
        setDailyBroadcast
    }
})