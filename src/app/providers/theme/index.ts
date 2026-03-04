import { onMounted, onUnmounted } from 'vue'

export enum AppThemes {
    dark = 'dark',
    light = 'light',
}
const THEME_TOKEN = 'theme_token'

const isTheme = (v: any): v is AppThemes =>
    v === AppThemes.dark || v === AppThemes.light

export const useThemeProvider = () => {
    const name = useState<AppThemes>('app-theme', () => AppThemes.dark)

    const getToken = (): AppThemes => {
        if (!import.meta.client) return AppThemes.dark
        const v = localStorage.getItem(THEME_TOKEN)
        return isTheme(v) ? v : AppThemes.dark
    }

    const setToken = (t: AppThemes) => {
        if (!import.meta.client) return
        localStorage.setItem(THEME_TOKEN, t)
    }

    const toggle = () => {
        const next = name.value === AppThemes.dark ? AppThemes.light : AppThemes.dark
        name.value = next
        setToken(next)
        document.documentElement.dataset.theme = next
    }

    const onStorage = (event: StorageEvent) => {
        if (event.key !== THEME_TOKEN) return
        if (isTheme(event.newValue)) {
            name.value = event.newValue
            document.documentElement.dataset.theme = event.newValue
        }
    }

    onMounted(() => {
        const t = getToken()
        name.value = t
        document.documentElement.dataset.theme = t
        window.addEventListener('storage', onStorage)
    })

    onUnmounted(() => {
        if (!import.meta.client) return
        window.removeEventListener('storage', onStorage)
    })

    return {
        name,
        names: AppThemes,
        toggle,
    }
}