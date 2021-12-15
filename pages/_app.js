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
      date: "2020-03-12", 
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
      date: "2021-11-01", 
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

  const [spendings, setSpendings] = useState([
    {
      date: "2021-12-01", 
      path: ["My Events","title 1",], 
      title: "title 1",
      amount: 10
    },
    {
      date: "2021-12-02", 
      path: ["My Events","title 1",], 
      title: "hehehe",
      amount: 30
    },
    {
      date: "2021-12-01", 
      path: ["My Events","title 1",], 
      title: "blah",
      amount: 10
    },
    {
      date: "2021-12-01", 
      path: ["My Events","title 1",], 
      title: "yaya",
      amount: 10
    },
    {
      date: "2021-12-01", 
      path: ["My Events","title 1",], 
      title: "wink wink",
      amount: 10
    },
    {
      date: "2021-12-01", 
      path: ["My Events","title 1",], 
      title: "howdy",
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
  )
}

export default MyApp