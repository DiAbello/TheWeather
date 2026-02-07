const toMinutes = (hhmm: string): number => {
    const [h, m] = hhmm.split(':').map(Number)
    return h * 60 + m
}
export const isBetween = (curr: string, next: string, target: string): boolean => {
    const c = toMinutes(curr)
    const n = toMinutes(next)
    const t = toMinutes(target)
    if (n >= c) return t >= c && t <= n
    return t >= c || t <= n
}