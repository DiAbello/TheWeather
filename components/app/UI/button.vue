<template>
  <button
      class="button d-flex align-center"
      type="button"
      :style="{ minWidth: `${minWidth}px` }"
  >
      <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  minWidth?: number
}>()
</script>

<style scoped lang="scss">
.button {
  background-color: var(--btnBackground);
  color: var(--primary-text);
  padding: 12px 16px;
  border-radius: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  * {
    background-color: inherit;
    color: inherit;
  }
  &:hover {
    background-color: var(--btnOhHover);
  }
}
</style>