<template>
  <button class="button d-flex align-center" type="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.button {
  background-color: #1D1D1D;
  color: #FFFFFFE6;
  padding: 12px 16px;
  border-radius: 32px;
  font-weight: bold;
  display: flex;
  gap: 6px;
  * {
    background-color: inherit;
    color: inherit;
  }
  &:hover {
    background-color: #323232;
  }
}
</style>