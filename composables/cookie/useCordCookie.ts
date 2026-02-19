export const useCordCookie = () => {
    const store = useWeatherStore()
    const { setLocation } = useLocation()
    const { loadCurrentForecast, loadDailyForecast} = useWeather()

    const setCordCookie = async (lat: number, lon: number) => {
        const UIStore = useUIStore()
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