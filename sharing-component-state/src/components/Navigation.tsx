interface Props {
    user: {
        id: number
        name: string
        role: string
    }
}

const Navigation = ({ user }: Props) => {
    return <div>Logged in user: {user.name}</div>
}

export default Navigation
