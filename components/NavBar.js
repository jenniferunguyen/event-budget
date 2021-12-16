import Link from 'next/link'
import { useUser } from '../context/UserContext'

export default function NavBar() {
  
  // allows user to return to previous page
  const { user, setUser } = useUser()
  const popPath = () => {
    let currentPath = user.path
    if(currentPath.length > 1){
      let newPath = currentPath.slice(0,-1)
      user.path = newPath
    }
  }

    return (
      <div className="h-full bg-white pl-6 pr-6 flex flex-col justify-start gap-4">
        <h1 className="mt-12">Event Budget</h1>
        {/* TODO: home button doesn't work, still need to add button */}
        <Link href="/budget" >
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <p>Home</p>
          </div>
        </Link>
        <Link href="/budget">
          <button onClick={popPath} className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
            <p>Back</p>
          </button>  
        </Link>
        <button className="flex" onClick={async () => {
          let { error } = await supabase.auth.signOut()
          if(error) {console.log(error)} else location.href="/"
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log out
        </button>
      </div>
    );
  }  