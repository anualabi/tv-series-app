"use client"

import { useState, useEffect } from 'react';

import Image from 'next/image';
import { SERIES_TITLE } from '@/constants';

import { SeriesProps } from '@/types';

export default function Home() {
  const [seriesData, setSeriesData] = useState<SeriesProps>()

  const getSeriesData = async (seriesTitle: string = SERIES_TITLE ) => {
    const response = await fetch(`/api/${seriesTitle}`)
    const data = await response.json()

    setSeriesData(data)
  }

  useEffect(() => {
    getSeriesData()
  }, [])


  return (
    <main className="lg:h-screen w-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 h-screen lg:h-full relative overflow-hidden flex flex-col justify-center pl-6 sm:pl-24">
        <Image 
          src='/assets/featured-poster.svg'
          alt="Background Image"
          fill
          priority
          className="object-cover object-bottom z-0 bg-gradient-to-bl from-black from-100% to-black to-100%" 
        />
        <div className="h-3/5 md:h-2/3 relative flex items-center pt-10">
          <div className="max-w-lg">
            <p className="text-white text-xl md:text-2xl leading-normal mb-4">{/** Season number */}</p>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-none">{seriesData?.Title}</h1>
            <p className="text-white text-xl md:text-2xl leading-normal mt-4 line-clamp-5">{seriesData?.Plot}</p>
          </div>
        </div>
        <div className="h-2/5 md:h-1/3 relative">
          {/** Episode Carousel */}
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-screen lg:h-full">
        {/** Episode Details */}
      </div>
    </main>
  )
}
