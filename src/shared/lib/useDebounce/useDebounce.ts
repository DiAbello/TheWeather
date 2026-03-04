interface InputElement extends Event {
    target: HTMLInputElement
}

export const useDebounce = (delay: number) => {
    const inputValue = ref<string>('')
    const updatedInputValue = ref<string>('')
    let timeoutId: any
    function handleInput(event: InputElement) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            updatedInputValue.value = event.target.value
        }, delay)
    }
    onUnmounted(() => {
        clearTimeout(timeoutId)
    })
    return {
        inputValue,
        handleInput,
        updatedInputValue,
    }
}