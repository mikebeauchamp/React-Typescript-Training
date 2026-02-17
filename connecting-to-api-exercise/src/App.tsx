import axios, { AxiosError, CanceledError } from 'axios'
import { useEffect, useState } from 'react'

interface User {
    id: string
    first_name: string
    middle_name: string
    last_name: string
    email: string
}

const App = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await axios.get<User[]>(
                    'https://jsonfakery.com/users/random/3',
                    { signal: controller.signal }
                )
                setUsers(response.data)
                setLoading(false)
            } catch (error) {
                if (error instanceof CanceledError) return
                setError((error as AxiosError).message)
                setLoading(false)
            }
        }

        fetchUsers()

        return () => {
            controller.abort()
        }

        // axios
        //     .get<User[]>('https://jsonfakery.com/usersss/random/3')
        //     .then(response => {
        //         setUsers(response.data)
        //     })
        //     .catch(error => {
        //         setError(error.message)
        //     })
    }, [])

    //Delete user from list
    const deleteUser = (user: User) => {
        setUsers(users.filter(u => u.id !== user.id))
        axios.delete(`https://jsonfakery.com/users/${user.id}`)
    }

    const addUser = async () => {
        const newUser: User = {
            id: '',
            first_name: 'New',
            middle_name: 'User',
            last_name: 'Added',
            email: 'new.user@example.com'
        }
        setUsers([newUser, ...users])

        try {
            const response = await axios.post(
                'https://jsonfakery.com/users',
                newUser
            )
            const createdUser = response.data
            setUsers(prevUsers =>
                prevUsers.map(user => (user === newUser ? createdUser : user))
            )
        } catch (error) {
            setError((error as AxiosError).message)
            setUsers(prevUsers => prevUsers.filter(user => user !== newUser))
        }
    }

    const updateUser = async (user: User) => {
        const updatedUser = { ...user, first_name: 'Updated' }
        setUsers(users.map(u => (u.id === user.id ? updatedUser : u)))

        try {
            await axios.patch(
                `https://jsonfakery.com/users/${user.id}`,
                updatedUser
            )
        } catch (error) {
            setError((error as AxiosError).message)
            setUsers(users.map(u => (u.id === user.id ? user : u)))
        }
    }

    return (
        <>
            {error && <p className="text-red-500">{error}</p>}
            {loading && <p>Loading...</p>}
            <ul className="w-1/2 divide-y divide-gray-300">
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700 mb-2"
                    onClick={() => addUser()}
                >
                    Create User
                </button>
                {users.map(user => (
                    <li
                        key={user.id}
                        className="flex justify-between leading-loose py-1"
                    >
                        {user.first_name} {user.middle_name} {user.last_name}
                        <div className="flex gap-2">
                            <button
                                className="bg-white text-green-500 border border-green-500 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white"
                                onClick={() => updateUser(user)}
                            >
                                Update
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700"
                                onClick={() => deleteUser(user)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
