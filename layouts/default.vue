<script setup lang="ts">
const { name } = useThemeProvider()
const route = useRoute()
const { currentForecast } = useWeather()
useHead(() => ({
  title: (
      currentForecast?.value?.name ? `${currentForecast.value?.name}` + ' - ' + `${route.meta.title}` : 'Погода'
  ) as string
}))
</script>
<template>
  <div class="wrapper" :data-theme="name">
    <VApp>
      <VMain>
        <AppNavBar/>
        <VContainer>
          <div class="content d-flex ga-4">
            <AppMenu/>
            <Suspense>
              <template #default>
                <slot/>
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