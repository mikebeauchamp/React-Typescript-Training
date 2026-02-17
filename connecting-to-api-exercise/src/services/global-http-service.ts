import apiClient from './api-client'

interface Data {
    id: string
}

class GlobalHttpService {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async getAll<T>(signal?: AbortSignal): Promise<T[]> {
        const response = await apiClient.get<T[]>(this.endpoint, {
            signal
        })
        return response.data
    }

    async delete(id: string): Promise<void> {
        await apiClient.delete(`${this.endpoint}/${id}`)
    }

    async createUser<T>(data: T): Promise<T> {
        const response = await apiClient.post<T>(this.endpoint, data)
        return response.data
    }

    async updateUser<T extends Data>(data: T): Promise<T> {
        const response = await apiClient.patch<T>(
            `${this.endpoint}/${data.id}`,
            data
        )
        return response.data
    }
}

const createService = (endpoint: string) => new GlobalHttpService(endpoint)

export default createService
