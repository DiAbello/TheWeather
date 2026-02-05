const toMinutes = (hhmm: string): number => {
    const [h, m] = hhmm.split(':').map(Number)
    return h * 60 + m
}
// true, если target находится между curr и next
// включая кейс, когда интервал пересекает полночь (next < curr)
export const isBetween = (curr: string, next: string, target: string): boolean => {
    const c = toMinutes(curr)
    const n = toMinutes(next)
    const t = toMinutes(target)

    // обычный интервал, например 18:00 -> 21:00
    if (n >= c) return t >= c && t <= n

    // интервал через полночь, например 21:00 -> 00:00
    // тогда корректная проверка: t >= 21:00 ИЛИ t <= 00:00
    return t >= c || t <= n
}