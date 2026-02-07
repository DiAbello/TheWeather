<script setup lang="ts">
const props = defineProps<{
  dailyForecast: DailyForecast
}>()
const formattedDailyForecast = computed(() => getFormattedDailyForecast(props.dailyForecast) ?? [])
const activeIndex = ref(0)

const contentRef = ref<HTMLElement | null>(null)
const itemRefs = ref<HTMLElement[]>([])
const xCenters = ref<number[]>([])

const setItemRef = (el: Element | null, i: number) => {
  if (!el) return
  itemRefs.value[i] = el as HTMLElement
}

const calcCenters = () => {
  const container = contentRef.value
  if (!container) return
  const cRect = container.getBoundingClientRect()

  xCenters.value = itemRefs.value
      .filter(Boolean)
      .map((el) => {
        const r = el.getBoundingClientRect()
        return (r.left - cRect.left) + r.width / 2
      })
}

const recalc = async () => {
  await nextTick()
  calcCenters()
}

let ro: ResizeObserver | null = null

onMounted(async () => {
  await recalc()
  ro = new ResizeObserver(() => calcCenters())
  if (contentRef.value) ro.observe(contentRef.value)
  window.addEventListener('resize', calcCenters)
})

onBeforeUnmount(() => {
  if (ro && contentRef.value) ro.unobserve(contentRef.value)
  window.removeEventListener('resize', calcCenters)
})

watch(formattedDailyForecast, recalc, { deep: true })
</script>

<template>
  <div class="daily">
    <div class="daily__title">
      Прогноз на 5 дней
    </div>
    <div class="daily__content" ref="contentRef">
      <AppUIDailyGraph
          :dailyForecast="formattedDailyForecast"
          :xCenters="xCenters"
          :activeIndex="activeIndex"
      />
      <div
          class="daily__slot"
          v-for="(item, index) in formattedDailyForecast"
          :key="item.dt_txt ?? index"
          :ref="(el) => setItemRef(el as any, index)"
      >
        <WeatherDailyItem
            :dailyForecast="formattedDailyForecast"
            :weatherItem="item"
            :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.daily {
  padding: 20px 24px;
  width: 100%;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  position: relative;
  &__title {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 16px;
  }
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  &__slot {
    flex: 1 1 auto;
  }
}
</style>