import NavBar from "../components/NavBar";
import EventForm from "../components/EventForm";
import FilterByLevel from '../components/FilterByLevel'
import Head from 'next/head';
import {Auth} from '@supabase/ui'
import { useState, useEffect } from 'react'

export default function AddEvent() {

    const { user } = Auth.useUser()
    const [events, setEvents] = useState([{}])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      fetchEvents()
    }, [loading])
  
    const fetchEvents = async () => {
      let { data: events, error } = await supabase
        .from('events')
        .select()
  
      if(!error) {
        setEvents(events)
        setLoading(false)
      } else {
        // there was an error
        console.log(error)
        setLoading(false)
        setError(error)
      }
    }

    /* Something went wrong while fetching data*/
    if (error) {
        return <p className="text-green-800">{error}</p>
      }
      
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
                <NavBar user={user}></NavBar>
            </nav>
            <div className="middle-panel">
                <EventForm user={user} events={events}></EventForm>
            </div>
            <div className="side-panel-top">
                <h2 className="mt-5">Other Events at this Level</h2>
                {events.filter(f => <FilterByLevel level={f} user={user}/>).map(e=> (
                    <div className="m-2 rounded-xl p-2 w-4/5 border border-white" style={{backgroundColor: e.color.toString()}}>{e.title}</div>
                ))}
            </div>
        </main>
      </div>
    );
  }  
    