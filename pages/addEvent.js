import { useEvents } from '../context/EventContext'
import NavBar from "../components/NavBar";
import EventForm from "../components/EventForm";
import FilterByLevel from '../components/FilterByLevel'
import Head from 'next/head';

export default function AddEvent() {

    const { events, setEvents } = useEvents()
      
    return (
        <div>
        <Head>
            <title>Event Budget - Add Event</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=PT+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <main className="grid bg-green-100">
            <nav className="nav-bar bg-white">
                <NavBar></NavBar>
            </nav>
            <div className="middle-panel">
                <EventForm></EventForm>
            </div>
            <div className="side-panel-top">
                <h2 className="mt-5">Other Events at this Level</h2>
                {events.filter(f => <FilterByLevel level={f}/>).map(e=> (
                    <div className="m-2 rounded-xl p-2 w-4/5 border border-white" style={{backgroundColor: e.color.toString()}}>{e.title}</div>
                ))}
            </div>
        </main>
      </div>
    );
  }  
    