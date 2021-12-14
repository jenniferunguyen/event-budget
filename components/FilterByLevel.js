import { useUser } from '../context/UserContext'

export default function FilterByLevel(level) {
    // only display events that are at the current level
    const { user, setUser } = useUser()
    if (JSON.stringify(e.path.slice(0,-1)) === JSON.stringify(user.path)){
        return true
    }
}