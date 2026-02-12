export interface User {
    user: {
        id: number
        name: string
        role: string
    }

    onNameUpdate?: () => void
}
