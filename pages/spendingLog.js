import SpendingTable from '../components/SpendingTable'
import FilterByLevel from '../components/FilterByLevel'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import {Auth} from '@supabase/ui'
import { useState, useEffect } from 'react'

export default function SpendingLog () {

  const { user } = Auth.useUser()
  const [spendings, setSpendings] = useState([])

  useEffect(() => {
    fetchSpendings()
  }, [loading])

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
    let filteredSpending = spendings.filter(f => <FilterByLevel item={f} user={user}/>).reverse()
    let num = filteredSpending.length

    return (
        <div>
        <Head>
          <title>Event Budget - Spending Log</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=PT+Sans&display=swap" rel="stylesheet"></link>
        </Head>
        <main className="grid bg-green-100">
          <nav className="nav-bar bg-white">
            <NavBar user={user}></NavBar>
          </nav>
          <div className="event-panel">
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Event</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200/50">
                {filteredSpending.slice(0,num).map(e => (
                    <tr>
                        <td>{e.mydate}</td>
                        <td>{e.title}</td>
                        <td>{JSON.stringify(e.mypath.reverse())}</td>
                        <td>{e.amount}</td>
                    </tr>
                ))}
            </tbody>
            </table>   
          </div> 
        </main>
      </div>
    )
}