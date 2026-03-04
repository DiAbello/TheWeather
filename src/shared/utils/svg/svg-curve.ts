type Pt = { x: number; y: number }
export const toBezierPath = (points: Pt[], tension = 0.25): string => {
    if (!points.length) return ''
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
    const cp = (p0: Pt, p1: Pt, p2: Pt, t: number) => {
        const dx1 = p2.x - p0.x
        const dy1 = p2.y - p0.y
        const c1: Pt = {
            x: p1.x - dx1 * t,
            y: p1.y - dy1 * t,
        }
        const c2: Pt = {
            x: p1.x + dx1 * t,
            y: p1.y + dy1 * t,
        }
        return { c1, c2 }
    }
    let d = `M ${points[0].x} ${points[0].y}`
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] ?? points[i]
        const p1 = points[i]
        const p2 = points[i + 1]
        const p3 = points[i + 2] ?? p2
        const { c2: c1 } = cp(p0, p1, p2, tension)
        const { c1: c2 } = cp(p1, p2, p3, tension)

        const c1x = clamp(c1.x, Math.min(p1.x, p2.x), Math.max(p1.x, p2.x))
        const c2x = clamp(c2.x, Math.min(p1.x, p2.x), Math.max(p1.x, p2.x))
        d += ` C ${c1x} ${c1.y}, ${c2x} ${c2.y}, ${p2.x} ${p2.y}`
    }
    return d
}