<script lang="ts" setup>
const store = useStore()

onMounted(() => {
  if(store.lat && store.lon && store.currentBroadcast) {
    store.getCurrentBroadcast(store.lat, store.lon)
  }
})


</script>

<template>
  <div class="page">
    {{ store.currentBroadcast }}
  </div>
</template>

<style>
.page {
  flex: 1 1 auto;
  position: relative;
}
</style>