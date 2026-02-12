import { User } from '../types/user'

const ProfilePage = ({ user, onNameUpdate }: User) => {
    return (
        <>
            <h1>Profile Page</h1>
            <span>Name: {user.name}</span>
            <button onClick={onNameUpdate}>Update Name</button>
        </>
    )
}

export default ProfilePage
