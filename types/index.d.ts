declare global {
    interface SearchedCountries {
        name: string,
        local_names: [],
        lat: number,
        lon: number,
        country: string,
        state: string
    }
    interface ApiResponse<T> {
        status: number,
        data: T
    }
}

export {

}