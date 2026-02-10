import { getCurrentForecast, getDailyForecast, getSearchedCountries } from "~/services/weather.api";

export const useWeather = () => {
    const store = useWeatherStore()
    const API_KEY: string = String(useRuntimeConfig().public.apiKey)

    const searchedCountries = computed(() => store.searchedCountries)
    const currentForecast = computed(() => store.currentForecast)
    const dailyForecast = computed(() => store.dailyForecast)

    const loadSearchedCountries = async (city_name: string) => {
        const data = await getSearchedCountries(city_name, API_KEY)
        store.setSearchedCountries(data)
        return data
    }
    const loadCurrentForecast = async (lat: number, lon: number) => {
        const data = await getCurrentForecast(lat, lon, API_KEY)
        store.setCurrentForecast(data)
        return data
    }
    const loadDailyForecast = async (lat: number, lon: number) => {
        const data = await getDailyForecast(lat, lon, API_KEY)
        store.setDailyForecast(data)
        return data
    }
    const loadByCoords = async (lat: number, lon: number) => {
        await Promise.all([
            loadCurrentForecast(lat, lon),
            loadDailyForecast(lat, lon),
        ])
    }

    return {
        searchedCountries,
        currentForecast,
        dailyForecast,
        loadCurrentForecast,
        loadSearchedCountries,
        loadDailyForecast,
        loadByCoords
    }
}