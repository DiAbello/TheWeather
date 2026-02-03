export const useCordCookie = () => {
    const store = useWeatherStore()
    const { setLocation } = useLocation()
    const { loadCurrentBroadcast, loadDailyBroadcast} = useWeather()

    const setCordCookie = async (lat: number, lon: number) => {
        const UIStore = useUIStore()
        setLocation({
            lat: lat,
            lon: lon
        })
        await loadCurrentBroadcast(lat, lon)
        await loadDailyBroadcast(lat, lon)
        store.clearSearchedCountries()
        UIStore.inputValue = ''
    }
    return {
        setCordCookie
    }
}