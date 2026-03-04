export const isNewDay = (index: number, DailyForecast: DailyForecast | null ) => {
    const getDay = (dt_txt: string) => (dt_txt?.split(" ")[0] ?? "");
    if (index === 0) return false;
    if ('type' in DailyForecast?.list[index] || 'type' in DailyForecast?.list[index - 1]) return false

    const currDay = getDay(DailyForecast?.list[index].dt_txt);
    const prevDay = getDay(DailyForecast?.list[index - 1].dt_txt);
    return currDay !== prevDay
}