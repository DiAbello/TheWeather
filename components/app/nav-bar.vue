<script lang="ts" setup>

const store = useStore()
const { inputValue, handleInput, updatedInputValue, isLoading } = useDebounce(1000)

watch(updatedInputValue, async () => {
  await store.getCountries(updatedInputValue.value, 1)
})
</script>

<template>
  <VAppBar>
    <VContainer>
      <div class="d-flex justify-center align-center py-2">
        <VAppBarTitle> The Weather </VAppBarTitle>
        <VTextField
            max-width="300px"
            label="Search..."
            class="mt-2"
            :loading="isLoading"
            append-inner-icon="mdi-magnify"
            density="compact"
            variant="solo"
            hide-details
            single-line
            v-model="inputValue"
            @input="handleInput"
        />
      </div>
    </VContainer>
  </VAppBar>
</template>