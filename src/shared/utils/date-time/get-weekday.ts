export const getWeekday = (dateTime: string): string => {
    const [datePart, timePart = '00:00:00'] = dateTime.trim().split(' ')
    const [y, m, d] = datePart.split('-').map(Number)
    const [hh, mm, ss] = timePart.split(':').map(Number)

    const dt = new Date(y, (m ?? 1) - 1, d ?? 1, hh ?? 0, mm ?? 0, ss ?? 0)

    const map = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] as const
    return map[dt.getDay()]
}