import { $fetch } from "ofetch";

export const getSearchedCountries = (city_name: string, API_KEY: string) => {
    const BASE_URL = 'https://api.openweathermap.org/geo/1.0/direct'
    return $fetch<SearchedCountries[]>(`${BASE_URL}`, {
            params: {
                q: city_name,
                limit: 5,
                lang: 'ru',
                appid: API_KEY,
            }
        }
    )
}
export const getCurrentForecast = (lat: number, lon: number, API_KEY: string) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
    return $fetch<CurrentForecast>(`${BASE_URL}`, {
        params: {
            lat: lat,
            lon: lon,
            appid: API_KEY,
            lang: 'ru',
            units: 'metric'
        }
    })
}
export const getDailyForecast = (lat: number, lon: number, API_KEY: string) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'
    return $fetch<DailyForecast>(`${BASE_URL}`, {
        params: {
            lat: lat,
            lon: lon,
            appid: API_KEY,
            units: 'metric',
            lang: 'ru'
        }
    })
}
