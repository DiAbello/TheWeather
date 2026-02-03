export const getSunTimes = (
    sunriseUnix: number,
    sunsetUnix: number,
    timezoneOffset: number,
    locale = 'ru-RU'
): SunTimes => {
    const format = (unix: number) =>
        new Date((unix + timezoneOffset) * 1000).toLocaleTimeString(locale, {
            hour: '2-digit',
            minute: '2-digit',
        })
    return {
        sunrise: format(sunriseUnix),
        sunset: format(sunsetUnix),
    }
}