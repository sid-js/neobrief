import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NeoBriefIcon from '../public/neobrief-icon.png'


const BriefCard = ({brief}) => {
  return (
    <Link
  href={`/briefs/${brief.id}`}
  className="group relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white drop-shadow-md cursor-pointer hover:scale-105 transition duration-300 hover:bg-slate-50"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 transition-all duration-700 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 group-hover:bg-pos-100"
  ></span>
    <div className='flex flex-col gap-3 justify-start items-start'>
        <div className='flex flex-row items-center justify-start gap-2'>
            <Image src={NeoBriefIcon} width={75} height={75} className='rounded-md' alt={brief.title}/>
            <div className='flex flex-col justify-center items-start'>
                <h2 className='text-xl font-semibold'>{brief.title}</h2>
                <p className='text-md font-normal text-gray-700'>{brief.industry}</p>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-md font-normal line-clamp-4   text-gray-700 w-fit'>
                {brief.description}
            </p>
            <span className='px-4 py-1 bg-gray-100 text-gray-700 font-semibold rounded-2xl w-max'>{brief.category}</span>
        </div>
    </div>
    </Link>
  )
}

export default BriefCard