<template>
  <div class="wrapper">
    <VApp>
      <VMain>
        <VContainer>
          <AppNavBar/>
          <div class="d-flex ga-2">
            <AppMenu/>
            <slot/>
          </div>
        </VContainer>
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  overflow: hidden;
  background-color: #0E0E0E !important;
  color: rgba(255, 255, 255, 0.9) !important;
}
</style>