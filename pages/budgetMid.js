import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'
import NavBar from '../components/NavBar'
import SpendingForm from '../components/SpendingForm'
import SpendingTable from '../components/SpendingTable'
import MidDisplay from '../components/MidDisplay'
import { useState, useEffect } from 'react'

export default function BudgetMid() {

  const { user } = Auth.useUser()
  const [events, setEvents] = useState([{}])
  const [spendings, setSpendings] = useState([{}])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
    fetchSpendings()
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

  const fetchSpendings = async () => {
    let { data: spendings, error } = await supabase
      .from('spendings')
      .select()

    if(!error) {
      setSpendings(spendings)
      setLoading(false)
    } else {
      // there was an error
      console.log(error)
      setLoading(false)
      setError(error)
    }
  }

    /* Application is still fetching data */
    if (loading) {
      return <p className="text-green-800">Loading...</p>
    }
  
    /* Something went wrong while fetching data*/
    if (error) {
      return <p className="text-green-800">{error}</p>
    }

  return (
    <div>
      <Head>
        <title>Event Budget</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=PT+Sans&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="grid bg-green-100">
        <nav className="nav-bar">
          <NavBar user={user}></NavBar>
        </nav>
        <div className="middle-panel">
          {/* TODO: button for search */}
          {/* <div className="search">Search</div> */}
          <div>
            <MidDisplay user={user} events={events} spendings={spendings}></MidDisplay>
          </div>    
        </div>
        <div className="side-panel-top">
          <h2 className='mt-5'>Recently Added Spending</h2>
          <div className="m-2 p-1 bg-gray-200 border-black border rounded-md w-1/5 text-center">
            <Link href="/spendingLog">View more</Link>
          </div>
          <SpendingTable numRow={5} user={user} spendings={spendings}></SpendingTable>
        </div>
        <div className="side-panel-bottom">
          <SpendingForm user={user} events={events} spendings={spendings}></SpendingForm>
        </div>
      </main>
    </div>
  )
}
