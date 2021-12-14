import NavBar from "../components/NavBar";
import { useUser } from '../context/UserContext'
import { EventContext, useEvents } from '../context/EventContext'

export default function AddEvent() {

    const { user, setUser } = useUser()
    const { events, setEvents } = useEvents()
    let submitForm = (mydate, mytitle, mybudget, mycolor, mydescription, mylink) => {
        let newPath = user.path
        newPath.push(mytitle)
        let newEvent = {
            date: mydate, 
            path: newPath, 
            title: mytitle, 
            budget: mybudget, 
            spending: 0, 
            color: mycolor, 
            description: mydescription, 
            link: mylink, 
            hasSubevents: false
          }
        events.push(newEvent)
        
    }

  
    return (
        <div>
        <main className="grid bg-green-100">
            <nav className="nav-bar bg-white">
                <NavBar></NavBar>
            </nav>
            <form>
                <label for="mydate">Date: </label>
                <input placeholder="MM/DD/YY" type="date" id="mydate" name="mydate"
                    className="m-2 rounded px-1 py-1"></input><br/>
                <label for="mytitle" className="text-red-500">*Title: </label>
                <input type="text" id="mytitle" name="mytitle" maxLength="50" required={true}
                    className="m-2 rounded px-1 py-1"></input><br/>
                <label for="mybudget" className="text-red-500">*Budget: </label>
                <input type="number" id="mybudget" name="mybudget" required={true}
                    className="m-2 rounded px-1 py-1"></input><br/>
                <label for="mycolor">Color: </label>
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
                <label for="mydescription">Description: </label>
                <input type="text" id="mydescription" name="mydescription"
                    className="m-2 rounded px-1 py-1"></input><br/>
                <label for="mylink">Link: </label>
                <input type="url" id="mylink" name="mylink"
                    className="m-2 rounded px-1 py-1"></input><br/>
                <button type="submit">Save</button>
            </form>
        </main>
      </div>
    );
  }  
    