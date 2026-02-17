import apiClient from './api-client'

export interface User {
    id: string
    first_name: string
    middle_name: string
    last_name: string
    email: string
}

class UserService {
    async getUsers(signal?: AbortSignal): Promise<User[]> {
        const response = await apiClient.get<User[]>('/users/random/3', {
            signal
        })
        return response.data
    }

    async deleteUser(id: string): Promise<void> {
        await apiClient.delete(`/users/${id}`)
    }

    async createUser(user: User): Promise<User> {
        const response = await apiClient.post<User>('/users', user)
        return response.data
    }

    async updateUser(user: User): Promise<User> {
        const response = await apiClient.patch<User>(`/users/${user.id}`, user)
        return response.data
    }
}

export default new UserService()
