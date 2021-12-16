import { useUser } from '../context/UserContext'

export default function FilterByLevel(item) {
    // only display events that are at the current level
    const { user, setUser } = useUser()

    if (JSON.stringify(item.path.slice(0,-1)) === JSON.stringify(thisPath)){
        return true
    }
}