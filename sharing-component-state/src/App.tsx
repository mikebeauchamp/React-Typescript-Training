import { useState } from 'react'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'

const App = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'Edward Matthews',
        role: 'Administrator'
    })

    const handleNameUpdate = () => {
        setUser({ ...user, name: 'Mike Beauchamp' })
    }

    return (
        <>
            <Navigation user={user} />
            <ProfilePage user={user} onNameUpdate={handleNameUpdate} />
        </>
    )
}

export default App
