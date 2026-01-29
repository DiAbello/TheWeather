<template>
  <div>
    <div class="searchingResults result" v-if="store.isInputFocused">
      <div class="result"
           v-if="store.searchedCountries.length > 0"
           v-for="item in store.searchedCountries"
           :key="item.lat + item.lon"
           @click="store.setLocation(item.lat, item.lon)"
      >
        <div class="result-name">
          {{item.local_names.ru}}
        </div>
        <div class="result-state">
          {{item.state}}
        </div>
      </div>
      <div class="result" v-else>
        Ничего не найдено
      </div>
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const store = useStore()

onMounted(() => {
  if(localStorage.getItem('lat') && localStorage.getItem('lon')) {
    console.log(1)
    store.lat = Number(localStorage.getItem('lat'))
    store.lon = Number(localStorage.getItem('lon'))
  }
})

</script>

<style lang="scss">
.searchingResults {
  position: fixed;
  width: 639px;
  height: fit-content;
  top: 14%;
  left: 35%;
  z-index: 9999;
  color: var(--DefaultTextColor);
  border-radius: 12px;
  padding: 16px;
  background-color: #161617;
  margin-top: 10px;
  .result {
    padding: 12px 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #3c3b3b;
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    &-name {
      font-size: 16px;
      margin-bottom: 3px;
    }
    &-state {
      color: #999999;
    }
  }
}
</style>