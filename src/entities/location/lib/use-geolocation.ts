type GeoResult
  = | { ok: true, coords: { lat: number, lon: number } }
    | { ok: false, code: 'unsupported' | 'denied' | 'timeout' | 'unavailable' | 'unknown', message: string }

export const useGeolocation = () => {
  const pending = ref(false)
  const error = ref<string | null>(null)

  const getCoords = async (opts?: PositionOptions): Promise<GeoResult> => {
    error.value = null
    if (!import.meta.client) {
      return { ok: false, code: 'unsupported', message: 'Geolocation доступен только в браузере' }
    }
    if (!('geolocation' in navigator)) {
      return { ok: false, code: 'unsupported', message: 'Браузер не поддерживает геолокацию' }
    }
    pending.value = true
    try {
      const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10_000,
          maximumAge: 60_000,
          ...opts,
        })
      })
      return {
        ok: true,
        coords: { lat: pos.coords.latitude, lon: pos.coords.longitude },
      }
    } catch (e: unknown) {
      const code = (e as GeolocationPositionError)?.code
      let mapped: { code: 'denied' | 'unavailable' | 'timeout' | 'unknown', message: string }
      if (code === 1) {
        mapped = { code: 'denied', message: 'Разрешение на геолокацию отклонено' }
      } else if (code === 2) {
        mapped = { code: 'unavailable', message: 'Не удалось определить местоположение' }
      } else if (code === 3) {
        mapped = { code: 'timeout', message: 'Время ожидания истекло' }
      } else {
        mapped = { code: 'unknown', message: 'Ошибка геолокации' }
      }
      error.value = mapped.message
      return { ok: false, ...mapped }
    } finally {
      pending.value = false
    }
  }
  return { pending, error, getCoords }
}
