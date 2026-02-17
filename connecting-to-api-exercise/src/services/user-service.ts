import createService from './global-http-service.ts'

export interface User {
    id: string
    first_name: string
    middle_name: string
    last_name: string
    email: string
}

export default createService('/users')
