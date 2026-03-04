import { ref, computed } from 'vue'

export const useHorizontalSlider = (options: {
    itemWidth: number
    itemsPerPage?: number
    totalItems: number
}) => {
    const currentIndex = ref(0)
    const itemsPerPage = options.itemsPerPage ?? 3

    const maxIndex = computed(() =>
        Math.max(0, options.totalItems)
    )
    const translateX = computed(() =>
        -(currentIndex.value * options.itemWidth)
    )

    const next = () => {
        currentIndex.value = Math.min(currentIndex.value + itemsPerPage, maxIndex.value)
    }
    const prev = () => {
        currentIndex.value = Math.max(currentIndex.value - itemsPerPage, 0)
    }
    const reset = () => {
        currentIndex.value = 0
    }
    return { currentIndex, maxIndex, translateX, next, prev, reset }
}
