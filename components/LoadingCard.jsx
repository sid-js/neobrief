import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingCard = ({loading}) => {
  return (
    <Link
  href={`#`}
  className="group relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white drop-shadow-md cursor-pointer hover:scale-105 transition duration-300 hover:bg-slate-50"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 transition-all duration-700 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 group-hover:bg-pos-100"
  ></span>
    <div className='flex flex-col gap-3 justify-start items-start'>
        <div className='flex flex-row items-center justify-start gap-2 w-full'>
            {<Skeleton circle width={70} height={70}/>}
            <div className='flex flex-col justify-center items-start w-full'>
                <h2 className='text-xl font-semibold w-full'>{<Skeleton/>}</h2>
                <p className='text-md font-normal text-gray-700'>{<Skeleton width={70}/>}</p>
            </div>
        </div>
        <div className='flex flex-col gap-2 w-full'>
            <p className='text-md font-normal line-clamp-4   text-gray-700 w-full'>
            {<Skeleton count={4}/>}
            </p>
            {<Skeleton width={60}/>}
        </div>
    </div>
    </Link>
  )
}

export default LoadingCard