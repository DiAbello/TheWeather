<script lang="ts" setup="">
import Input from "~/src/shared/components/input/input.vue";
import { useDebounce } from "~/src/shared/lib/useDebounce/useDebounce";
import { useWeather } from "~/src/entities/weather/model/use-weather";
import { useCitySearch } from '~/src/features/search-city/model/use-city-search'
import { useUIStore } from "~/src/shared/components/input/store";

const { inputValue, updatedInputValue, handleInput} = useDebounce(1000)
const { currentForecast } = useWeather()
const { loadSearchedCountries } = useCitySearch()
const UIStore = useUIStore()
const searchInput = ref<{ inputEl: HTMLInputElement | null } | null>(null)

watch(() => updatedInputValue.value, async (newValue) => {
  if(newValue !== '') {
    await loadSearchedCountries(newValue)
  }
})
onMounted(() => {
  if (searchInput.value?.inputEl) {
    UIStore.setSearchInput(searchInput.value.inputEl)
  }
})
</script>

<template>
  <ClientOnly>
    <Input
        id="search-input"
        v-model="inputValue"
        @input="handleInput"
        Icon="mdi-magnify"
        ref="searchInput"
        :placeholder="currentForecast?.name ? currentForecast.name : 'Найти'"
    />
  </ClientOnly>
</template>
