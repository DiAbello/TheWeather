<script setup lang="ts">
import type { CSSProperties } from "vue";

const { searchedCountries } = useWeather()
const { setCordCookie } = useCordCookie()
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

const style = computed<CSSProperties>(() => {
  if (!UIStore.searchInputEl) return {}
  const rect = UIStore.searchInputEl.getBoundingClientRect()
  return {
    position: 'fixed',
    top: `${rect.bottom}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    zIndex: 999,
  }
})

</script>

<template>
  <div
      class="searchingResults result"
      v-if="UIStore.isInputFocused && searchedCountries!.length > 0"
      :style="style"
  >
    <div class="result"
         v-if="searchedCountries"
         v-for="item in searchedCountries"
         :key="item.lat + item.lon"
         @click="setCordCookie(item.lat, item.lon); UIStore.closeSearch()"
    >
      <div class="result-name">
        {{item.name}}
      </div>
      <div class="result-state">
        {{item.state}}
      </div>
    </div>
    <div class="result" v-else>
      Начни искать и всё появится
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
  color: var(--primary-text);
  border-radius: 12px;
  padding: 16px;
  background-color: var(--blockBackground);
  margin-top: 10px;
  .result {
    user-select: none;
    padding: 12px 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: var(--btnOhHover);
    }
    &:not(:last-child) {
      margin-bottom: 12px;
    }
    &-name {
      font-size: 16px;
      margin-bottom: 3px;
    }
    &-state {
      color: var(--secondary-text);
    }
  }
}
</style>