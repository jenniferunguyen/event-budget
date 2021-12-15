import { useUser } from '../context/UserContext'

export default function FilterByLevel(item, include) {
    // only display events that are at the current level
    const { user, setUser } = useUser()
    if (JSON.stringify(item.path.slice(0,-1)) === JSON.stringify(user.path)){
        return true
    }
}