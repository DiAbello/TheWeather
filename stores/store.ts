import axios from "axios";

export const useStore = defineStore('store', () => {
    const API_KEY: string = '72f2e3a08bdd374760ba60c151817a24'

    const lat: number = 0
    const lon: number = 0
    const searchedCountry = ref<SearchedCountries[]>([])

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