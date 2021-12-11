import 'tailwindcss/tailwind.css'
import "../styles.css";
import { Auth } from '@supabase/ui'
import {supabase} from '../utils/supabaseClient'
import { useState } from 'react'
import { EventContext } from '../context/EventContext'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({
    myEvents: [],
    totalBudget: 0
  })

  const userValue = {
    user, setUser
  }

  const [events, setEvents] = useState([
    {
      date: "date", 
      path: ["",], 
      title: "title", 
      budget: 100, 
      spending: 10, 
      color: "lightblue", 
      description: "description", 
      link: "", 
      hasSubevents: true
    },
    {
      date: "date", 
      path: ["",], 
      title: "title", 
      budget: 100, 
      spending: 50, 
      color: "lightgreen", 
      description: "description", 
      link: "", 
      hasSubevents: false
    },
  ])
  const eventsValue = { events, setEvents }

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      {/* <Component {...pageProps} /> */}
      <EventContext.Provider value={eventsValue}>
      <Component {...pageProps} />
      </EventContext.Provider>
    </Auth.UserContextProvider>
  )
}

export default MyApp