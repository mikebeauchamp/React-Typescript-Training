interface Props {
    user: {
        id: number
        name: string
        role: string
    }

    onNameUpdate: () => void
}

const ProfilePage = ({ user, onNameUpdate }: Props) => {
    return (
        <>
            <h1>Profile Page</h1>
            <span>Name: {user.name}</span>
            <button onClick={onNameUpdate}>Update Name</button>
        </>
    )
}

export default ProfilePage
