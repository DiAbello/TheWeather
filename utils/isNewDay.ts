export const isNewDay = (index: number, DailyBroadcast: DailyBroadcast | null ) => {
    const getDay = (dt_txt: string) => (dt_txt?.split(" ")[0] ?? "");
    if (index === 0) return false;
    if ('type' in DailyBroadcast?.list[index] || 'type' in DailyBroadcast?.list[index - 1]) return false
    const currDay = getDay(DailyBroadcast?.list[index].dt_txt);
    const prevDay = getDay(DailyBroadcast?.list[index - 1].dt_txt);
    return currDay !== prevDay
}