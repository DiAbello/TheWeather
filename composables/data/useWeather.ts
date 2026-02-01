import {getCurrentBroadcast, getSearchedCountries} from "~/services/weather.api";

export const useWeather = () => {
    const store = useWeatherStore()
    const API_KEY: string = String(useRuntimeConfig().public.apiKey)
    const {setLocation} = useLocation()

    const searchedCountries = computed(() => store.searchedCountries)
    const currentBroadcast = computed(() => store.currentBroadcast)

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
    const setBroadcast = async (lat: number, lon: number) => {
        const UIStore = useUIStore()
        setLocation({
            lat: lat,
            lon: lon
        })
        await loadCurrentBroadcast(lat, lon)
        store.clearSearchedCountries()
        UIStore.inputValue = ''
    }

    return {
        searchedCountries,
        currentBroadcast,
        loadCurrentBroadcast,
        loadSearchedCountries,
        setBroadcast
    }
}