import { useUser } from '../context/UserContext'

export default function FilterByLevel({item}) {
    // only display events that are at the current level
    const { user, setUser } = useUser()
    user.path = ["My Events", "September"]

    let thisPath = item.path.slice(0,-1)

    if (JSON.stringify(thisPath) === JSON.stringify(user.path)){
        return true
    }
    return false
}