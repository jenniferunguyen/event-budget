import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'
import { useUser } from '../context/UserContext'
import { useState } from 'react'
import { EventContext, useEvents } from '../context/EventContext'
import NavBar from '../components/NavBar'
import EventDisplay from '../components/EventDisplay'
import SpendingForm from '../components/SpendingForm'
import SpendingTable from '../components/SpendingTable'

export default function Budget() {

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
        <nav className="nav-bar bg-white">
          <NavBar></NavBar>
        </nav>
        <div className="event-panel">
          {/* TODO: button for search */}
          <div className="search">Search</div>
          <div>
            <EventDisplay></EventDisplay>
          </div>    
          </div>
          <div className="spending-bar">
            <div className="recent-spending">
              <h2>Recently Added Spending</h2>
              <SpendingTable numRow={5}></SpendingTable>
            </div>
            <div className="add-spending">
              {/* TODO: component SpendingForm -- look at path */}
              <SpendingForm></SpendingForm>
            </div>
          </div>  
      </main>
    </div>
  )
}
