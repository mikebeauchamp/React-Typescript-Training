import { User } from '../types/user'

const Navigation = ({ user }: User) => {
    return <div>Logged in as: {user.name}</div>
}

export default Navigation
