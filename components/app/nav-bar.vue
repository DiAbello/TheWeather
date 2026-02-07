<script lang="ts" setup>
const { loadSearchedCountries, currentForecast } = useWeather()
const UIStore = useUIStore()
const searchInput = ref<{ inputEl: HTMLInputElement | null } | null>(null)

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
      <div class="header d-flex justify-space-between align-center ga-2">
        <VAppBarTitle class="flex-0-0-10">
          <img src="@/assets/logo.svg" alt="">
        </VAppBarTitle>
        <AppUIButton>
          <VIcon icon="mdi-map-marker"/>
          <span>
            Найти меня
          </span>
        </AppUIButton>
        <div class="test fill">
          <AppUIInput
              @input="UIStore.handleInput"
              Icon="mdi-magnify"
              ref="searchInput"
              :placeholder="currentForecast?.name ? currentForecast.name : 'Найти'"
              @focus="UIStore.openSearch"
          />
        </div>
        <AppUIButton>
          <VIcon icon="mdi-star-outline"/>
          <span>
            В избранное
          </span>
        </AppUIButton>
      </div>
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: #0E0E0E !important;
  box-shadow: none !important;
}
.fill {
  flex: 1 1 36%;
  position: relative;
}

</style>