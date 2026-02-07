export interface clouds  {
    all: number
}
export interface wind  {
    deg: number,
    gust: number,
    speed: number
}
export interface weather  {
    description: string,
    icon: string,
    id: number,
    main: string
}
export interface ForecastMain  {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number
}
export interface Forecast extends ForecastSun{
    clouds: clouds,
    dt: number,
    dt_txt: string,
    main: ForecastMain,
    pop: number,
    sys: {
        pod: string,
    },
    visibility: number,
    wind: wind,
    weather: weather[]
}
export interface ForecastSun {
    type: string,
    time: string
}