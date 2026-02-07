export const getFormattedDailyForecast = (dailyForecast: DailyForecast) => {
    const forecast = dailyForecast.list

    let testMax = []
    let testMin = []

    const finalTemp = []

    for(let i = 0; i < forecast.length - 1; i++) {
        const curr = forecast[i]
        const next = forecast[i + 1]
        if(!curr || !next) continue
        testMax.push(curr.main.temp_max)
        testMin.push(curr.main.temp_min)
        if(getDate(curr.dt_txt) !== getDate(next.dt_txt)) {
            const averageMax = Math.max.apply(null, testMax)
            const averageMin = Math.min.apply(null, testMin)
            finalTemp.push({
                temp_max: averageMax,
                temp_min: averageMin,
                dt_txt: curr.dt_txt,
                dt: curr.dt,
                icon: curr.weather[0].icon
            })
            testMax = []
            testMin = []
        }
    }
    return finalTemp
}