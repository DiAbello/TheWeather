<script lang="ts" setup>

const store = useStore()
const { inputValue, handleInput, updatedInputValue, isLoading } = useDebounce(1000)

watch(updatedInputValue, async () => {
  await store.getCountries(updatedInputValue.value, 1)
})
</script>

<template>
  <VAppBar class="nav-bar">
    <VContainer>
      <div class="header d-flex justify-space-between align-center ga-2">
        <VAppBarTitle class="flex-0-0-10">
          <img src="@/assets/logo.svg" alt="">
        </VAppBarTitle>
        <AppUIButton>
          <VIcon icon="mdi-map-marker"/>
          <span>
            Найти меня
          </span>
        </AppUIButton>
        <AppUIInput
          v-model="inputValue"
          @input="handleInput"
          Icon="mdi-magnify"
          placeholder="Найти место"
          class="fill"
        />
        <AppUIButton>
          <VIcon icon="mdi-star-outline"/>
          <span>
            В избранное
          </span>
        </AppUIButton>
      </div>
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
.nav-bar {
  background-color: #0E0E0E !important;
  box-shadow: none !important;
}
.fill {
  flex: 1 1 29%;
}
</style>