import { getCurrentForecast, getDailyForecast } from "~/src/entities/weather/API/weather.api";
import { useWeatherStore } from "~/src/entities/weather/model/store";

export const useWeather = () => {
    const store = useWeatherStore()
    const API_KEY: string = String(useRuntimeConfig().public.apiKey)

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
        currentForecast: computed(() => store.currentForecast),
        dailyForecast: computed(() => store.dailyForecast),
        loadCurrentForecast,
        loadDailyForecast,
        loadByCoords
    }
}