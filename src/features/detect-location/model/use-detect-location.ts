import { useLocation } from "~/src/entities/location/model/use-location";
import { useGeolocation } from "~/src/entities/location/lib/use-geolocation";
import { useWeather } from "~/src/entities/weather/model/use-weather";

export function useDetectLocation() {
    const { setLocation } = useLocation()
    const { getCoords } = useGeolocation()
    const { loadByCoords } = useWeather()

    const detectLocation = async () => {
        if (!import.meta.client) return

        const res = await getCoords()
        if (!res.ok) {
            console.warn(res.message)
            return
        }
        setLocation(res.coords)
        await loadByCoords(res.coords.lat, res.coords.lon)
    }
    return { detectLocation }
}