export const getSunTimes = (
    sunriseUnix: number,
    sunsetUnix: number,
    timezoneOffsetSec: number,
    locale = 'ru-RU'
): SunTimes => {
    const formatter = new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
        timeZone: 'UTC',
    })
    const format = (unix: number) =>
        formatter.format(new Date((unix + timezoneOffsetSec) * 1000))
    return {
        sunrise: format(sunriseUnix),
        sunset: format(sunsetUnix),
    }
}