import { useUser } from '../context/UserContext'
import { EventContext, useEvents } from '../context/EventContext'
import Link from 'next/link'

export default function EventForm () {

    const { user, setUser } = useUser()
    const { events, setEvents } = useEvents()
    let getValue = (id) => {
        return document.getElementById(id).value
      }
    let submitForm = e => {
        let newPath = user.path
        newPath.push(getValue("mytitle"))
        let newEvent = {
            date: getValue("mydate"), 
            path: newPath, 
            title: getValue("mytitle"), 
            budget: parseInt(getValue("mybudget")), 
            spending: 0, 
            color: getValue("mycolor"), 
            description: getValue("mydescription"), 
            link: getValue("mylink"), 
            hasSubevents: false
          }
        events.push(newEvent)
        e.preventDefault()
        window.alert("Saved")
    }

    return (
        <form onSubmit={submitForm} className="add-event-form">
            <label htmlFor="mydate">Date: </label>
            <input placeholder="MM/DD/YY" type="date" id="mydate" name="mydate"
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mytitle" className="text-red-500">*Title: </label>
            <input type="text" id="mytitle" name="mytitle" maxLength="50" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mybudget" className="text-red-500">*Budget: </label>
            <input type="number" id="mybudget" name="mybudget" required={true}
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mycolor">Color: </label>
            <select name="mycolor" id="mycolor" className="m-2 rounded px-1 py-1">
                <option value="gray">gray (default)</option>
                <option value="red">red</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="pink">pink</option>
            </select><br/>
            {/* <input type="color" id="mycolor" name="mycolor"></input><br/> */}
            <label htmlFor="mydescription">Description: </label>
            <input type="text" id="mydescription" name="mydescription"
                className="m-2 rounded px-1 py-1"></input><br/>
            <label htmlFor="mylink">Link: </label>
            <input type="url" id="mylink" name="mylink"
                className="m-2 rounded px-1 py-1"></input><br/>
            <button type="submit">Save</button>
            <Link href="/budget">Cancel</Link>
        </form>        
    )
}