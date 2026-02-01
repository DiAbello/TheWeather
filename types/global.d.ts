export {

}

declare global {
    interface SearchedCountries {
        name: string,
        local_names: any
        lat: number,
        lon: number,
        country: string,
        state: string
    }
    interface CurrentBroadcast {
        base: string,
        clouds: {
            all: number
        },
        cod: number,
        coord: {
            lat: number,
            lon: number
        },
        dt: number,
        id: number,
        main: {
            feels_like: number,
            grnd_level: number,
            humidity: number,
            pressure: number,
            sea_level: number,
            temp: number,
            temp_max: number,
            temp_min: number
        },
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
        weather: Array<{
            description: string,
            icon: string,
            id: number,
            main: string
        }>,
        wind: {
            deg: number,
            gust: number,
            speed: number
        }
    }
    interface ApiResponse<T> {
        status: number,
        data: T
    }
    interface SavedLocation {
        lat: number;
        lon: number;
    }
}