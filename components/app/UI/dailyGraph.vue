<script setup lang="ts">
const props = defineProps<{
  dailyForecast: FormattedDailyForecast[]
  xCenters: number[]
  activeIndex: number
}>()

const graphRef = ref<HTMLElement | null>(null)
const width = ref(0)

const calcWidth = async () => {
  await nextTick()
  width.value = graphRef.value?.clientWidth ?? 0
}
let ro: ResizeObserver | null = null

onMounted(async () => {
  await calcWidth()
  ro = new ResizeObserver(() => calcWidth())
  if (graphRef.value) ro.observe(graphRef.value)
})

onBeforeUnmount(() => {
  if (ro && graphRef.value) ro.unobserve(graphRef.value)
})

watch(() => props.xCenters, calcWidth)
watch(() => props.dailyForecast, calcWidth, { deep: true })

const { pointsMax, pointsMin, pathMax, pathMin } = useDailyGraph(
    () => props.dailyForecast,
    () => props.xCenters,
    { yTop: 15, yBottom: 125, tension: 0.23 }
)
</script>

<template>
  <div class="graph-wrap" ref="graphRef">
    <div class="day-pill">День</div>
    <svg class="daily-graph" :width="width" height="150">
      <path class="line line--min" :d="pathMin" fill="none" />
      <path class="line line--max" :d="pathMax" fill="none" />
      <g class="dots dots--min">
        <circle
            v-for="(p, i) in pointsMin"
            :key="`min-${i}`"
            :cx="p.x"
            :cy="p.y"
            :r="i === activeIndex ? 7 : 6"
            :class="{ active: i === activeIndex }"
        />
      </g>
      <g class="dots dots--max">
        <circle
            v-for="(p, i) in pointsMax"
            :key="`max-${i}`"
            :cx="p.x"
            :cy="p.y"
            :r="i === activeIndex ? 7 : 6"
            :class="{ active: i === activeIndex }"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.graph-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px; /* подогонать под UI */
  height: 150px;
  pointer-events: none;
  z-index: 0;
}
.day-pill {
  position: absolute;
  left: 6px;
  top: 10px;
  z-index: 2;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255,255,255,.9);
  background: rgba(76,141,255,.35);
  backdrop-filter: blur(6px);
}
.daily-graph {
  width: 100%;
  height: 150px;
}
.active-col {
  fill: rgba(76,141,255,.08);
}
.line {
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: .95;
}
.line--max { stroke: #4C8DFF; }
.line--min { stroke: rgba(142, 139, 139, 0.22); }
.dots--max circle { fill: #4C8DFF; }
.dots--min circle { fill: rgba(108, 106, 106, 0.22); }
circle.active {
  filter: drop-shadow(0 0 10px rgba(76,141,255,.55));
}
</style>