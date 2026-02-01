export const useUIStore = defineStore('UI', () => {
        const isInputFocused = ref<boolean>(false)
        const openSearch = () => {
            isInputFocused.value = true
        }
        const closeSearch = () => {
            isInputFocused.value = false
        }
        const { inputValue, updatedInputValue, handleInput } = useDebounce(1000)
        return {
            isInputFocused,
            openSearch,
            closeSearch,
            updatedInputValue,
            handleInput,
            inputValue
        }
    }
)