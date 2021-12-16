import Head from 'next/head'
import Link from 'next/link'
import {Auth} from '@supabase/ui'
import { supabase } from '../utils/supabaseClient'

export default function Home() {

  const { user } = Auth.useUser()

  return (
    <div class="flex flex-row items-center justify-center min-h-screen py-2">
      <Head>
        <title>Event Budget - Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="flex justify-center">Welcome to Event Budget</h1>
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
