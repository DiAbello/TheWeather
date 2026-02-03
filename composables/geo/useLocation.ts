export const useLocation = () => {
    const location = useCookie<SavedLocation | null>('tw_location', {
        sameSite: 'lax',
        default: () => null,
    })
    const setLocation = (loc: SavedLocation) => {
        location.value = loc
    }

    const clearLocation = () => {
        location.value = null
    }
    return {
        location,
        setLocation,
        clearLocation
    }
}