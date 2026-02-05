export const getFormattedDailyBroadcast = (dailyBroadcast: DailyBroadcast) => {
    let broadcast = dailyBroadcast
    if (!broadcast || !Array.isArray(broadcast.list)) return null

    const obj = getSunTimes(
        broadcast?.city.sunrise,
        broadcast.city.sunset,
        broadcast.city.timezone
    )
    const list = broadcast.list
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
        ...broadcast,
        list: result,
    }
}