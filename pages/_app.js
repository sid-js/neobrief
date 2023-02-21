import '../styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import {Urbanist} from '@next/font/google'

const urbanist = Urbanist({display:'swap',variable:'--font-urbanist',subsets:['latin']})


function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps}  />
    </SessionContextProvider>
  )
}
export default MyApp