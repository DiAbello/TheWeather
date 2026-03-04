<script setup lang="ts">
import { useCitySearch } from "~/src/features/search-city/model/use-city-search";
import { useUIStore } from "~/src/shared/components/input/store";
import { useSelectCity } from '~/src/features/select-city/model/use-select-city'
import { useInputRegistry } from "~/src/shared/components/input/lib/useInputRegistry";

const { searchedCountries } = useCitySearch()
const { setCordCookie } = useSelectCity()
const UIStore = useUIStore()
const { clear } = useInputRegistry()

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
  <div
      class="searchingResults result"
      v-if="UIStore.isInputFocused && searchedCountries!.length > 0"
      ref="dropdownRef"
  >
    <div class="result"
         v-for="item in searchedCountries"
         :key="item.lat + item.lon"
         @click="setCordCookie(item.lat, item.lon); UIStore.closeSearch(); clear('search-input')"
    >
      <div class="result-name">
        {{item.name}}
      </div>
      <div class="result-state">
        {{item.state}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.searchingResults {
  position: fixed;
  width: 639px;
  height: fit-content;
  top: 78%;
  left: 36%;
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