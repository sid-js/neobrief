import Image from 'next/image'
import React from 'react'
import NeoBriefLogo from '../public/neobrief-logo.png'

const Navbar = () => {
  return (
    <nav className='flex flex-row py-2 h-24 w-full justify-between items-center'>
        <div className='flex flex-row cursor-pointer'>
            <Image src={NeoBriefLogo} width={180} height={40} />
        </div>
        <div></div>
    </nav>
  )
}

export default Navbar