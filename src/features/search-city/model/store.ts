export const useSearchCountryStore = defineStore('searchCountry', () => {
  const searchedCountries = ref<SearchedCountries[] | null>([])

  const setSearchedCountries = (data: SearchedCountries[]) => {
    searchedCountries.value = data
  }
  const clearSearchedCountries = () => {
    searchedCountries.value = null
  }

  return {
    searchedCountries,
    setSearchedCountries,
    clearSearchedCountries,
  }
})
