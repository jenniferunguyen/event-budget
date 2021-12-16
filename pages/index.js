import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'

export default function Home() {

  const { user } = Auth.useUser()

  return (
    <div class="flex flex-row items-center justify-center min-h-screen py-2 bg-gradient-to-t from-green-200">
      <Head>
        <title>Event Budget - Log In</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=PT+Sans&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h1>Welcome to Event Budget</h1>
        {
          user ? (
            location.href="./budget"
          ) :
            <div>
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge"/>
            </div>
        }
      </main>
    </div>
  )
}
