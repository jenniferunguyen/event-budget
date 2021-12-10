import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'

export default function Budget() {
  return (
    <div>
      <Head>
        <title>Event Budget</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main class="grid">
        <nav class="nav-bar">
          <h1>Event Budget</h1>
          <Link href="/home" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/settings" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Settings</p>
            </div>
          </Link>
          <div>
              <button onClick={async () => {
                let { error } = await supabase.auth.signOut()
                if(error) {console.log(error)} else location.href="/"
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log out
              </button>
            </div>
        </nav>
          <div class="event-panel">
            {/* button for search */}
            <div class="title">
              <h2>My Events</h2>
                {/* TODO: component EventDisplay */}
            </div>
          </div>
          <div class="spending-bar">
            <div class="recent-spending">
              <h2>Recent Spending</h2>
              {/* TODO: component SpendingTable with param 5 for number of rows */}
            </div>
            <div class="add-spending">
              <h2>Add Spending</h2>
              {/* TODO: component AddSpending*/}
            </div>
          </div>
        <footer>TODO: FILL IN FOOTER</footer>
        
      </main>
    </div>
  )
}
