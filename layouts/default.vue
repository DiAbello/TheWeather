<script setup lang="ts">
</script>
<template>
  <div class="wrapper">
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
  .content {
    position: relative;
    z-index: 1;
  }
}
</style>