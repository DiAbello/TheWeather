interface InputElement extends Event {
    target: HTMLInputElement
}

export default function useDebounce(delay: number) {
    const inputValue = ref<string>('')
    const isLoading = ref<boolean>(false)
    const updatedInputValue = ref<string>('')
    let timeoutId: any
    function handleInput(event: InputElement) {
        isLoading.value = true
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            updatedInputValue.value = event.target.value
            isLoading.value = false
        }, delay)
    }

    onUnmounted(() => {
        clearTimeout(timeoutId)
    })
    return {
        inputValue,
        handleInput,
        updatedInputValue,
        isLoading
    }
}