<template>
  <div class="input-area">
    <input
        v-model="UIStore.inputValue"
        placeholder=""
        class="input"
        @focus="UIStore.isInputFocused = true"
        ref="inputEl"
    >
    </input>
    <div class="placeholder" v-if="UIStore.inputValue.length == 0">
      <VIcon class="placeholder__icon" :icon="Icon"/>
      <span class="placeholder__text">
        {{ placeholder }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const UIStore = useUIStore()

defineProps({
  placeholder: {
    type: String,
    required: true
  },
  Icon: {
    type: String,
    required: false
  }
})
const inputEl = ref<HTMLInputElement | null>(null)

defineExpose({
  inputEl
})
</script>

<style scoped lang="scss">
.input-area {
  position: relative;
  width: 100%;
  .input {
    background-color: var(--blockBackground);
    padding: 12px 15px;
    border-radius: 32px;
    border: 1px solid var(--blockBackground);
    color: var(--primary-text);
    width: 100%;
    &:hover {
      border: 1px solid var(--inputBorder);
    }
    &:focus + .placeholder {
        display: none;
    }
  }
    .placeholder {
      user-select: none;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      color: var(--primary-text);
      position: absolute;
      top: 35%;
      left: 39%;
      &__icon {
        font-weight: 300;
        font-size: 14px;
      }
      &__text {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
</style>