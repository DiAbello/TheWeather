<script setup lang="ts">
const { searchedCountries, setBroadcast } = useWeather()
const UIStore = useUIStore()

const dropdownRef = ref<HTMLElement | null>(null)

const onClickOutside = (event: MouseEvent) => {
  if (!dropdownRef.value) return

  if (!dropdownRef.value.contains(event.target as Node)) {
    UIStore.closeSearch()
  }
}
onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onClickOutside)
})

</script>

<template>
  <div class="searchingResults result" v-if="UIStore.isInputFocused" ref="dropdownRef">
    <div class="result"
         v-if="searchedCountries"
         v-for="item in searchedCountries"
         :key="item.lat + item.lon"
         @click="setBroadcast(item.lat, item.lon); UIStore.closeSearch()"
    >
      <div class="result-name">
        {{item.name}}
      </div>
      <div class="result-state">
        {{item.state}}
      </div>
    </div>
    <div class="result" v-else>
      Ничего не найдено
    </div>
  </div>
</template>

<style scoped lang="scss">
.searchingResults {
  position: fixed;
  width: 639px;
  height: fit-content;
  top: 14%;
  left: 35%;
  z-index: 999;
  color: var(--DefaultTextColor);
  border-radius: 12px;
  padding: 16px;
  background-color: #161617;
  margin-top: 10px;
  .result {
    user-select: none;
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