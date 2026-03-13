<script lang="ts" setup>
import ToggleThemeButton from '~/src/features/toggle-theme-button/components/toggle-theme-button.vue'
import DetectLocationButton from '~/src/features/detect-location/components/detect-location-button.vue'
import Logo from '~/src/shared/components/logo/logo.vue'
import CitySearchInput from '~/src/features/search-city/components/city-search-input.vue'
import CitySearchDropdown from '~/src/features/search-city/components/city-search-dropdown.vue'
</script>

<template>
  <VAppBar class="nav-bar">
    <VContainer>
      <div class="header d-flex align-center ga-2">
        <Logo />
        <DetectLocationButton />
        <div class="input">
          <CitySearchInput />
          <CitySearchDropdown />
        </div>
        <ToggleThemeButton />
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
