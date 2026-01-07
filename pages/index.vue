<script lang="ts" setup>
const store = useStore()

</script>

<template>
  <div class="page">
    <div class="container">
      {{store.searchedCountry}}
    </div>
  </div>
</template>

<style>
.page {
  flex: 1 1 auto;
}
</style>