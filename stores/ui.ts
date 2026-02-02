export const useUIStore = defineStore('UI', () => {
        const isInputFocused = ref<boolean>(false)
        const searchInputEl = ref<null | HTMLElement>(null)

        const openSearch = () => {
            isInputFocused.value = true
        }
        const closeSearch = () => {
            isInputFocused.value = false
        }
        const setSearchInput = (el: HTMLElement) => {
            searchInputEl.value = el
        }
        const { inputValue, updatedInputValue, handleInput } = useDebounce(1000)
        return {
            isInputFocused,
            updatedInputValue,
            inputValue,
            searchInputEl,

            openSearch,
            closeSearch,
            setSearchInput,
            handleInput,
        }
    }
)