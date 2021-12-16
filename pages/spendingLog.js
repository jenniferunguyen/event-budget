import SpendingTable from '../components/SpendingTable'
import { SpendingContext, useSpendings } from '../context/SpendingContext'
import FilterByLevel from '../components/FilterByLevel'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'

export default function SpendingLog () {

    const { spendings, setSpendings } = useSpendings()
    let filteredSpending = spendings.filter(f => <FilterByLevel item={f}/>).reverse()
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
            <NavBar></NavBar>
          </nav>
          <div className="event-panel">
            {/* TODO: button for search */}
            {/* <div className="search">Search</div> */}
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
                        <td>{e.date}</td>
                        <td>{e.title}</td>
                        <td>{JSON.stringify(e.path.reverse())}</td>
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