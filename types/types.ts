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
export interface BroadcastMain  {
    feels_like: number,
    grnd_level: number,
    humidity: number,
    pressure: number,
    sea_level: number,
    temp: number,
    temp_max: number,
    temp_min: number
}
export interface Broadcast {
    clouds: clouds,
    dt: number,
    dt_txt: string,
    main: BroadcastMain,
    pop: number,
    sys: {
        pod: string,
    },
    visibility: number,
    wind: wind,
    weather: weather[]
}