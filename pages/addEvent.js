import { EventContext, useEvents } from '../context/EventContext'
import NavBar from "../components/NavBar";
import EventForm from "../components/EventForm";
import FilterByLevel from '../components/FilterByLevel'

export default function AddEvent() {

    const { events, setEvents } = useEvents()

    return (
        <div>
        <main className="grid bg-green-100">
            <nav className="nav-bar bg-white">
                <NavBar></NavBar>
            </nav>
            <div>
                <EventForm></EventForm>
            </div>
            <div>
                <h2>Other Events at this Level</h2>
                {events.filter(f => <FilterByLevel level={f}/>).map(e=> (
                    <div className="co-events" style={{backgroundColor: "light"+e.color.toString()}}>{e.title}</div>
                ))}
            </div>
        </main>
      </div>
    );
  }  
    