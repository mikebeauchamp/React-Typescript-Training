import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
    id: number
    first_name: string
    middle_name: string
    last_name: string
    email: string
}

const App = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get<User[]>('https://jsonfakery.com/usersss/random/3')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])

    return (
        <>
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.first_name} {user.middle_name} {user.last_name}{' '}
                        {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
