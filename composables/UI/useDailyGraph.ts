import { computed } from 'vue'
type Pt = { x: number; y: number }
export const useDailyGraph = (
    dailyForecast: () => FormattedDailyForecast[],
    xCenters: () => number[],
    opts?: {
        yTop?: number
        yBottom?: number
        tension?: number
    }
) => {
    const yTop = opts?.yTop ?? 15
    const yBottom = opts?.yBottom ?? 125
    const tension = opts?.tension ?? 0.25
    const temps = computed(() => {
        const data = dailyForecast()
        const maxs = data.map(d => Number(d.temp_max))
        const mins = data.map(d => Number(d.temp_min))
        return { maxs, mins }
    })
    const bounds = computed(() => {
        const all = [...temps.value.maxs, ...temps.value.mins]
        const min = Math.min(...all)
        const max = Math.max(...all)
        const pad = 1
        return { min: min - pad, max: max + pad }
    })
    const yAt = (t: number) => {
        const { min, max } = bounds.value
        const usable = yBottom - yTop
        if (max === min) return yTop + usable / 2
        const k = (t - min) / (max - min)
        return yTop + (1 - k) * usable
    }
    const pointsMax = computed(() => {
        const xs = xCenters()
        const data = dailyForecast()
        return data.map((d, i) => ({ x: xs[i] ?? 0, y: yAt(Number(d.temp_max)) }))
    })
    const pointsMin = computed(() => {
        const xs = xCenters()
        const data = dailyForecast()
        return data.map((d, i) => ({ x: xs[i] ?? 0, y: yAt(Number(d.temp_min)) }))
    })
    const pathMax = computed(() => toBezierPath(pointsMax.value as Pt[], tension))
    const pathMin = computed(() => toBezierPath(pointsMin.value as Pt[], tension))
    return {
        yTop,
        yBottom,
        pointsMax,
        pointsMin,
        pathMax,
        pathMin,
    }
}