<script setup lang="ts">
const UIStore = useUIStore()
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

const props = defineProps<{
  modelValue: string,
  placeholder?: string
  Icon?: string
  id: string
}>()
const inputEl = ref<HTMLInputElement | null>(null)
const { register, unregister } = useInputRegistry()

const clear = () => emit('update:modelValue', '')
const set = (v: string) => emit('update:modelValue', v)

onMounted(() => {
    register(props.id, { clear, set, focus })
})
onUnmounted(() => {
  unregister(props.id)
})
defineExpose({
  inputEl
})
</script>

<template>
  <div class="input-area">
    <input
        :value="modelValue"
        placeholder=""
        class="input"
        ref="inputEl"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @focus="UIStore.openSearch"
    >
    </input>
    <div class="placeholder" v-if="modelValue.length == 0">
      <VIcon class="placeholder__icon" :icon="Icon"/>
      <span class="placeholder__text">
        {{ placeholder }}
      </span>
    </div>
  </div>
</template>


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