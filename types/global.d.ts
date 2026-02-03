import { BroadcastMain, Broadcast, wind, weather, clouds} from '/types'

declare global {
    interface SavedLocation {
        lat: number;
        lon: number;
    }
    interface SearchedCountries extends SavedLocation{
        name: string,
        local_names: any
        country: string,
        state: string
    }
    interface CurrentBroadcast {
        base: string,
        clouds: clouds,
        cod: number,
        coord: SavedLocation
        dt: number,
        id: number,
        main: BroadcastMain
        name: string,
        sys: {
            country: string,
            id: number,
            sunrise: number,
            sunset: number,
            type: number
        },
        timezone: number,
        visibility: number,
        weather: weather[]
        wind: wind
    }
    interface DailyBroadcast {
        city: {
            coord: SavedLocation,
            country: string,
            id: number,
            name: string,
            population: number,
            sunrise: number,
            sunset: number,
            timezone: number,
        }
        cnt: number,
        cod: string,
        message: number,
        list: Broadcast[]
    }
    interface SunTimes {
        sunrise: string
        sunset: string
    }
}
export {

}