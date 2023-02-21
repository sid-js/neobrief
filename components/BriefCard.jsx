import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NeoBriefIcon from '../public/neobrief-icon.png'


const BriefCard = ({brief}) => {
  return (
    <Link
  href="#"
  class="group relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white drop-shadow-md cursor-pointer hover:scale-105 transition duration-300 hover:bg-slate-50"
>
  <span
    class="transition-colors duration-700 absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#ff930f] to-[#fff95b] group-hover:from-[#c3ff0f]"
  ></span>
    <div className='flex flex-col gap-3 justify-start items-start'>
        <div className='flex flex-row items-center justify-start gap-2'>
            <Image src={NeoBriefIcon} width={75} height={75} className='rounded-md'/>
            <div className='flex flex-col justify-center items-start'>
                <h2 className='text-xl font-semibold'>{brief.title}</h2>
                <p className='text-md font-normal text-gray-700'>{brief.industry}</p>
            </div>
        </div>
        <div>
            <p className='text-md font-normal text-gray-700'>
                {brief.description}
            </p>
        </div>
    </div>
    </Link>
  )
}

export default BriefCard