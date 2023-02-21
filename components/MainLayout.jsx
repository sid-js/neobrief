import { Urbanist } from '@next/font/google'
import React from 'react'
const urbanist = Urbanist({display:'swap',variable:'--font-urbanist',subsets:['latin']})

const MainLayout = ({children}) => {
  return (
    <main className={`${urbanist.variable}`}>
        {children}
    </main>
  )
}

export default MainLayout