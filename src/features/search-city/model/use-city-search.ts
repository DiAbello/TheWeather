import { useSearchCountryStore } from '~/src/features/search-city/model/store'
import { getSearchedCountries } from '~/src/entities/weather/API/weather.api'

export const useCitySearch = () => {
  const store = useSearchCountryStore()
  const API_KEY: string = String(useRuntimeConfig().public.apiKey)

  const loadSearchedCountries = async (city_name: string) => {
    const data = await getSearchedCountries(city_name, API_KEY)
    store.setSearchedCountries(data)
    return data
  }
  return {
    searchedCountries: computed(() => store.searchedCountries),
    loadSearchedCountries,
  }
}
