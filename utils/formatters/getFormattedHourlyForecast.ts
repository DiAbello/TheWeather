export const getFormattedHourlyForecast = (dailyForecast: DailyForecast) => {
    let forecast = dailyForecast
    if (!forecast || !Array.isArray(forecast.list)) return null

    const obj = getSunTimes(
        forecast?.city.sunrise,
        forecast.city.sunset,
        forecast.city.timezone
    )
    const list = forecast.list
    const result: typeof list = []
    for (let i = 0; i < list.length; i++) {
        const curr = list[i]
        const next = list[i + 1]
        result.push(curr)
        if (!curr?.dt_txt || !next?.dt_txt) continue
        if (
            isBetween(getTime(curr.dt_txt), getTime(next.dt_txt), obj.sunrise)
        ) {
            result.push({
                type: 'sunrise',
                time: obj.sunrise
            })
        }
        if(
            isBetween(getTime(curr.dt_txt), getTime(next.dt_txt), obj.sunset)
        ) {
            result.push({
                type: 'sunset',
                time: obj.sunset
            })
        }
    }
    return {
        ...forecast,
        list: result,
    }
}