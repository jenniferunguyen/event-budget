export default function FilterByLevel({item,user}) {
    // only display events that are at the current level

    let thisPath = item.mypath.slice(0,-1)

    if (JSON.stringify(thisPath) === JSON.stringify(user.mypath)){
        return true
    }
    return false
}