import type { Forecast } from "~/types/types";

enum CurrentTime {
    "09:00",
    "12:00",
    "18:00",
    "21:00"
}
export const getFormattedDeepDailyForecast = (dailyForecast: DailyForecast) => {
    const forecast = dailyForecast
    const list = dailyForecast.list

    let test: Array<Forecast> = []
    const result: Forecast[][] = []
    for (let i = 0; i < list.length; i++) {
        const curr = list[i]
        if (!(isNewDay(i, forecast))) {
            if (getTime(curr.dt_txt) in CurrentTime) {
                test.push(curr)
            }
        } else {
            result.push(test)
            test = []
        }
    }
    return {
        ...forecast,
        list: result
    }
}