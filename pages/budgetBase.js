import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'
import NavBar from '../components/NavBar'
import DetailDisplay from '../components/DetailDisplay'
import SpendingForm from '../components/SpendingForm'
import SpendingTable from '../components/SpendingTable'
import { useUser } from '../context/UserContext'

export default function BudgetBase() {

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
          <NavBar></NavBar>
        </nav>
        <div className="middle-panel">
          {/* TODO: button for search */}
          {/* <div className="search">Search</div> */}
          <div>
            <DetailDisplay></DetailDisplay>
          </div>    
        </div>
        <div className="side-panel-top">
          <h2 className='mt-5'>Recently Added Spending</h2>
          <div className="m-2 p-1 bg-gray-200 border-black border rounded-md w-1/5 text-center">
            <Link href="/spendingLog">View more</Link>
          </div>
          <SpendingTable numRow={5}></SpendingTable>
        </div>
        <div className="side-panel-bottom">
          <SpendingForm></SpendingForm>
        </div>
      </main>
    </div>
  )
}
