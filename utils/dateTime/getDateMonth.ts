export const getDateMonth = (dt_txt: string): string => {
    const datePart = dt_txt.trim().split(' ')[0]
    const [y, m, d] = datePart.split('-').map(Number)

    const date = new Date(y, (m ?? 1) - 1, d ?? 1)

    return new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
    }).format(date)
}