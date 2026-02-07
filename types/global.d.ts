import { ForecastMain, Forecast, wind, weather, clouds} from '/types'

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
    interface CurrentForecast {
        base: string,
        clouds: clouds,
        cod: number,
        coord: SavedLocation
        dt: number,
        id: number,
        main: ForecastMain
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
    interface DailyForecast {
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
        list: Forecast[]
    }
    interface SunTimes {
        sunrise: string
        sunset: string
    }
    interface sliderSettings {
        currentIndex: globalThis.Ref<number>,
        maxIndex: globalThis.ComputedRef<number>,
        translateX: globalThis.ComputedRef<number>,
        next: () => void;
        prev: () => void;
        reset: () => void;
    }
    interface FormattedDailyForecast {
        temp_max: number,
        temp_min: number,
        dt_txt: string,
        dt: number,
        icon: string
    }
}
export {

}