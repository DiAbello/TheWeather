<script lang="ts" setup>
const { setLocation } = useLocation()
const { loadByCoords } = useWeather()
const { loadSearchedCountries, currentForecast } = useWeather()
const UIStore = useUIStore()
const searchInput = ref<{ inputEl: HTMLInputElement | null } | null>(null)
const { name, toggle } = useThemeProvider()
const { getCoords, pending } = useGeolocation()

const onFindMe = async () => {
  const res = await getCoords()
  if (!res.ok) {
    console.warn(res.message)
    return
  }
  setLocation(res.coords)
  await loadByCoords(res.coords.lat, res.coords.lon)
}

onMounted(() => {
  if (searchInput.value?.inputEl) {
    UIStore.setSearchInput(searchInput.value.inputEl)
  }
})

watch(() => UIStore.updatedInputValue, async (newValue) => {
  if(newValue !== '') {
    await loadSearchedCountries(newValue)
  }
})
</script>

<template>
  <VAppBar class="nav-bar">
    <VContainer>
      <div class="header d-flex align-center ga-2">
        <VAppBarTitle class="title">
          <img v-if="name === 'dark'" src="../../assets/logo-dark.svg" alt="Dark logo">
          <img v-if="name === 'light'" src="../../assets/logo-light.svg" alt="Light logo">
        </VAppBarTitle>
        <AppUIButton class="b" @click="onFindMe" :disabled="pending" :minWidth="137">
          <AppUILoading v-if="pending"/>
          <span v-if="!pending">
            <VIcon icon="mdi-map-marker"/>
          <span>
            Найти меня
          </span>
          </span>
        </AppUIButton>
        <div class="input">
          <AppUIInput
              @input="UIStore.handleInput"
              Icon="mdi-magnify"
              ref="searchInput"
              :placeholder="currentForecast?.name ? currentForecast.name : 'Найти'"
              @focus="UIStore.openSearch"
          />
        </div>
        <AppUIButton class="d">
          <VIcon
              icon="mdi-theme-light-dark"
              @click="toggle"
          />
        </AppUIButton>
      </div>
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: var(--primary-background) !important;
  box-shadow: none !important;
}
.title {
  flex: 0 1 18.5%;
}
.input {
  flex: 0 1 55%;
  position: relative;
}
</style>