import 'tailwindcss/tailwind.css'
import "../styles.css";
import { Auth } from '@supabase/ui'
import {supabase} from '../utils/supabaseClient'
import { useState } from 'react'
import { UserContext } from '../context/UserContext'
import { EventContext } from '../context/EventContext'
import { SpendingContext } from '../context/SpendingContext'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState({
    path: ["My Events",]
  })
  const userValue = {
    user, setUser
  }

  // TODO: delete test data
  const [events, setEvents] = useState([
    {
      date: "2021-09-01", 
      path: ["My Events","September",], 
      title: "September", 
      budget: 100, 
      color: "#9bf6ff", 
      description: "Here are some notes that I have for September expenses", 
      link: "", 
      hasSubevents: false
    },
    {
      date: "2021-11-01", 
      path: ["My Events","November",], 
      title: "November", 
      budget: 100, 
      color: "#caffbf", 
      description: "Here are some notes that I have for November expenses", 
      link: "", 
      hasSubevents: false
    },
  ])
  const eventsValue = { events, setEvents }

  const [spendings, setSpendings] = useState([
    {
      date: "2021-09-09", 
      path: ["My Events","September",], 
      title: "Dinner with the Parents",
      amount: 50
    },
    {
      date: "2021-12-02", 
      path: ["My Events","November",], 
      title: "Movie ticket",
      amount: 10
    },
  ])
  const spendingsValue = { spendings, setSpendings }

  return (
    // <Auth.UserContextProvider supabaseClient={supabase}>
    <UserContext.Provider value={userValue}>
      <EventContext.Provider value={eventsValue}>
        <SpendingContext.Provider value={spendingsValue}>
          <Component {...pageProps} />
        </SpendingContext.Provider>
      </EventContext.Provider>
    </UserContext.Provider>
    // </Auth.UserContextProvider>
    // <Auth.UserContextProvider supabaseClient={supabase}>
    //   <Component {...pageProps} />
    // </Auth.UserContextProvider>
  )
}

export default MyApp