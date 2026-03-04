import { useLocation } from "~/src/entities/location/model/use-location";
import { useSearchCountryStore } from "~/src/features/search-city/model/store";
import { useWeather } from "~/src/entities/weather/model/use-weather";

export const useSelectCity = () => {
    const store = useSearchCountryStore()

    const { setLocation } = useLocation()
    const { loadCurrentForecast, loadDailyForecast} = useWeather()

    const setCordCookie = async (lat: number, lon: number) => {
        setLocation({
            lat: lat,
            lon: lon
        })
        await loadCurrentForecast(lat, lon)
        await loadDailyForecast(lat, lon)
        store.clearSearchedCountries()
    }
    return {
        setCordCookie
    }
}