<template>
  <input
      class="input"
      placeholder="Найти место"
      v-model="inputValue"
  />
</template>

<script setup lang="ts">

const inputValue = ref<string>('')

</script>

<style scoped lang="scss">
.input {
  background-color: #161617;
  padding: 12px 15px;
  border-radius: 32px;
  border: 1px solid #161617;
  &:hover{
    border: 1px solid #404040;
  }
  &::placeholder{
    color: white;
  }
}
</style>