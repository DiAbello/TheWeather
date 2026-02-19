type InputController = {
    clear: () => void
    focus?: () => void
    set?: (v: string) => void
    get?: () => string
}

export const useInputRegistry = () => {
    const registry = useState<Map<string, InputController>>(
        'input-registry',
        () => new Map()
    )

    const register = (id: string, controller: InputController) => {
        registry.value.set(id, controller)
    }

    const unregister = (id: string) => {
        registry.value.delete(id)
    }

    const get = (id: string) => registry.value.get(id)

    const clear = (id: string) => registry.value.get(id)?.clear()
    const set = (id: string, v: string) => registry.value.get(id)?.set?.(v)

    return {
        register,
        unregister,
        get,
        clear,
        set
    }
}
