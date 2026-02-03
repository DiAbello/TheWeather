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
            getTime(curr.dt_txt) <= obj.sunrise && getTime(next.dt_txt) >= obj.sunrise
        ) {
            result.push({
                type: 'sunrise',
                time: obj.sunrise
            })
        }
    }
    return {
        ...broadcast,
        list: result,
    }
}