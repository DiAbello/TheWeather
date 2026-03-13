<script setup lang="ts">
import { useWeather } from '~/src/entities/weather/model/use-weather'
import AppHeader from '~/src/widgets/app-header/app-header.vue'
import AppSidebar from '~/src/widgets/app-sidebar/app-sidebar.vue'
import { useThemeProvider } from '~/src/app/providers/theme'

const { name } = useThemeProvider()
const route = useRoute()
const { currentForecast } = useWeather()
useHead(() => ({
  title: (
    currentForecast?.value?.name ? `${currentForecast.value?.name}` + ' - ' + `${route.meta.title}` : 'Погода'
  ) as string,
}))
</script>

<template>
  <div
    class="wrapper"
    :data-theme="name"
  >
    <VApp>
      <VMain>
        <AppHeader />
        <VContainer>
          <div class="content d-flex ga-4">
            <AppSidebar />
            <Suspense>
              <template #default>
                <slot />
              </template>
            </Suspense>
          </div>
        </VContainer>
      </VMain>
    </VApp>
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100%;
  overflow: hidden;
  transition: all 0.4s;
  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
