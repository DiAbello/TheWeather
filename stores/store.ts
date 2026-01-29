import axios from "axios";
import type {LocationQueryValue} from "vue-router";

export const useStore = defineStore('store', () => {

    const API_KEY: string = String(useRuntimeConfig().public.apiKey)

    const lat = ref<number>()
    const lon = ref<number>()

    const currentBroadcast = ref<CurrentBroadcast>()
    const searchedCountries = ref<SearchedCountries[]>([])

    // Input focus/unfocus logic
    const isInputFocused = ref<boolean>(false)

    async function getCurrentBroadcast(lat: number | null | LocationQueryValue[], lon: number | null | LocationQueryValue[]): Promise<void> {
        const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`
        const response: ApiResponse<CurrentBroadcast> = await axios.get(queryUrl)
        currentBroadcast.value = response.data
    }
    async function getCountries(city_name: string, limit?: number): Promise<void> {
        const queryUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name},&limit=${limit}&appid=${API_KEY}&lang=ru`
        const response: ApiResponse<SearchedCountries[]> = await axios.get(queryUrl)
        searchedCountries.value = response.data
    }
    function setLocation(lat: number, lon: number) {
        localStorage.setItem('lat', String(lat))
        localStorage.setItem('lon', String(lon))

    }
    return {
        getCountries,
        searchedCountries,
        getCurrentBroadcast,
        setLocation,
        isInputFocused,
        lat,
        lon,
        currentBroadcast
    }
})