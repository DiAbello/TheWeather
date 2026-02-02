import {getCurrentBroadcast, getDailyBroadcast, getSearchedCountries} from "~/services/weather.api";

export const useWeather = () => {
    const store = useWeatherStore()
    const API_KEY: string = String(useRuntimeConfig().public.apiKey)

    const searchedCountries = computed(() => store.searchedCountries)
    const currentBroadcast = computed(() => store.currentBroadcast)
    const dailyBroadcast = computed(() => store.dailyBroadcast)

    const loadSearchedCountries = async (city_name: string) => {
        const data = await getSearchedCountries(city_name, API_KEY)
        store.setSearchedCountries(data)
        return data
    }
    const loadCurrentBroadcast = async (lat: number, lon: number) => {
        const data = await getCurrentBroadcast(lat, lon, API_KEY)
        store.setCurrentBroadcast(data)
        return data
    }
    const loadDailyBroadcast = async (lat: number, lon: number) => {
        const data = await getDailyBroadcast(lat, lon, API_KEY)
        store.setDailyBroadcast(data)
        return data
    }

    return {
        searchedCountries,
        currentBroadcast,
        dailyBroadcast,
        loadCurrentBroadcast,
        loadSearchedCountries,
        loadDailyBroadcast
    }
}