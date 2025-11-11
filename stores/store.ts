import axios from "axios";

export const useStore = defineStore('store', () => {
    const API_KEY: string = '72f2e3a08bdd374760ba60c151817a24'

    const lat: number = 0
    const lon: number = 0
    const searchedCountry = ref([])

    async function getCountry(city_name: string, limit?: number) {
        const queryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},&limit=${limit}&appid=${API_KEY}`
        const response = await axios.get(queryUrl)
        searchedCountry.value = response.data
        console.log(searchedCountry.value[0])
    }

    return {
        getCountry,
        searchedCountry
    }
})