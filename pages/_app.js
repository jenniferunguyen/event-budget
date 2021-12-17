import 'tailwindcss/tailwind.css'
import "../styles.css";
import { useState } from 'react'
import { UserContext } from '../context/UserContext'
import { EventContext } from '../context/EventContext'
import { SpendingContext } from '../context/SpendingContext'

import { Auth } from '@supabase/ui'
import {supabase} from '../utils/supabaseClient'

function MyApp({ Component, pageProps }) {

  // const [user, setUser] = Auth.useUser()
  // const userValue = {
  //   user, setUser
  // }

  // // TODO: delete test data
  // const [events, setEvents] = await supabase
  //   .from('events')
  //   .select()
  // const eventsValue = { events, setEvents }

  // const [spendings, setSpendings] = useState([
  // ])
  // const spendingsValue = { spendings, setSpendings }

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
    {/* <UserContext.Provider value={userValue}> */}
      {/* <EventContext.Provider value={eventsValue}>
        <SpendingContext.Provider value={spendingsValue}> */}
          <Component {...pageProps} />
        {/* </SpendingContext.Provider>
      </EventContext.Provider> */}
    {/* </UserContext.Provider> */}
    </Auth.UserContextProvider>
    // <Auth.UserContextProvider supabaseClient={supabase}>
    //   <Component {...pageProps} />
    // </Auth.UserContextProvider>
  )
}

export default MyApp