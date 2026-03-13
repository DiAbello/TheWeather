export const isNewDay = (index: number, dailyForecast: DailyForecast | null) => {
  const getDay = (dt_txt: string) => (dt_txt?.split(' ')[0] ?? '')
  if (index === 0 || !dailyForecast) return false
  if ('type' in dailyForecast.list[index] || 'type' in dailyForecast.list[index - 1]) return false

  const currDay = getDay(dailyForecast.list[index].dt_txt)
  const prevDay = getDay(dailyForecast.list[index - 1].dt_txt)
  return currDay !== prevDay
}
