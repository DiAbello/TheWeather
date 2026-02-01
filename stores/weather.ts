
export const useWeatherStore = defineStore('weather', () => {

    const currentBroadcast = ref<CurrentBroadcast | null>(null)
    const searchedCountries = ref<SearchedCountries[] | null>([])

    const setSearchedCountries = (data: SearchedCountries[]) => {
        searchedCountries.value = data
    }
    const setCurrentBroadcast = (data: CurrentBroadcast) => {
        currentBroadcast.value = data
    }
    const clearSearchedCountries = () => {
        searchedCountries.value = null
    }

    return {
        searchedCountries,
        currentBroadcast,
        setCurrentBroadcast,
        setSearchedCountries,
        clearSearchedCountries
    }
})