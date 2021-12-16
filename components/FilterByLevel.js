import { useUser } from '../context/UserContext'

export default function FilterByLevel(item, altPath) {
    // only display events that are at the current level
    const { user, setUser } = useUser()
    let thisPath = item.path.slice(0,-1)
    if (altPath){
        thisPath = item.path
    }
    if (JSON.stringify(thisPath) === JSON.stringify(user.path)){
        return true
    }
    return false
}