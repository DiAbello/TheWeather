import axios from "axios";

export const useStore = defineStore('store', () => {
    const API_KEY: string = String(useRuntimeConfig().public.apiKey)

    const lat: number = 0
    const lon: number = 0
    const searchedCountry = ref<SearchedCountries[]>([])
    const currentWeather = ref<CurrentBroadcast>()

    async function getCurrentBroadcast(lat: number, lon: number): Promise<void> {
        const queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=ru&units=metric`
        const response: ApiResponse<CurrentBroadcast> = await axios.get(queryUrl)
        console.log(response.data)
    }

    async function getCountries(city_name: string, limit?: number): Promise<void> {
        const queryUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name},&limit=${limit}&appid=${API_KEY}`
        const response: ApiResponse<SearchedCountries[]> = await axios.get(queryUrl)
        searchedCountry.value = response.data
    }

    return {
        getCountries,
        searchedCountry
    }
})