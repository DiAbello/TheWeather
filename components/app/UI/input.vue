<template>
  <div class="input-area">
    <input
        v-model="inputValue"
        placeholder=""
        class="input"
        @focus="store.isInputFocused = true"
        @blur="store.isInputFocused = false"
    >
    </input>
    <div class="placeholder" v-if="inputValue.length == 0">
      <VIcon class="placeholder__icon" :icon="Icon"/>
      <span class="placeholder__text">
        {{ placeholder }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useStore()
const inputValue = ref<string>('')
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

</script>

<style scoped lang="scss">
.input-area {
  position: relative;
  width: 100%;
  .input {
    background-color: #161617;
    padding: 12px 15px;
    border-radius: 32px;
    border: 1px solid #161617;
    color: var(--DefaultTextColor);
    width: 100%;
    &:hover {
      border: 1px solid #404040;
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
      color: var(--DefaultTextColor);
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