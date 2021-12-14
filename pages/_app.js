import 'tailwindcss/tailwind.css'
import "../styles.css";
import { Auth } from '@supabase/ui'
import {supabase} from '../utils/supabaseClient'
import { useState } from 'react'
import { EventContext } from '../context/EventContext'
import { UserContext } from '../context/UserContext';

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({
    name: "Jennifer",
    path: ["My Events",]
  })
  const userValue = {
    user, setUser
  }

  // TODO: delete test data
  const [events, setEvents] = useState([
    {
      date: "date 1", 
      path: ["My Events","title 1",], 
      title: "title 1", 
      budget: 100, 
      spending: 10, 
      color: "blue", 
      description: "description", 
      link: "", 
      hasSubevents: true
    },
    {
      date: "date 2", 
      path: ["My Events","title 2",], 
      title: "title 2", 
      budget: 100, 
      spending: 50, 
      color: "green", 
      description: "description", 
      link: "", 
      hasSubevents: false
    },
  ])
  const eventsValue = { events, setEvents }

  return (
    // <Auth.UserContextProvider supabaseClient={supabase}>
    <UserContext.Provider value={userValue}>
      <EventContext.Provider value={eventsValue}>
        <Component {...pageProps} />
      </EventContext.Provider>
    </UserContext.Provider>
    // </Auth.UserContextProvider>
  )
}

export default MyApp