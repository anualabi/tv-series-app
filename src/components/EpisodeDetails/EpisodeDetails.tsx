import React from 'react'

import Image from 'next/image';

import { IconStar } from '@/components/icons';
import { EpisodeProps } from '@/types'

export interface EpisodeDetailProps {
    data: EpisodeProps;
}

const  EpisodeDetail: React.FC<EpisodeDetailProps> = ({ data }) => {
  const { Title, Plot, Episode, Released, imdbRating } = data
  
  return (
    <div className="w-full h-full">
      <div className="h-3/5 md:h-2/3 flex-grow relative">
        <Image
          src='/assets/episode-one.svg'
          alt={`${Title}`}
          fill
          priority
          style={{objectFit: "cover"}}	
        />
      </div>
      <div className="h-2/5 md:h-1/3 bg-white text-black">
        <div className="flex justify-between items-center h-1/3 p-4 md:p-8 border-b border-gray-200">
          <p className="text-base xl:text-lg pt-1.5">Episode {Episode} &mdash; {Released}</p>
          <div className="text-base xl:text-lg flex items-center">
            <IconStar />
            <p className='ml-3.5 pt-1.5'>
              <span className='font-bold'>{imdbRating}</span>/10
            </p>
          </div>
        </div>
        <div className="h-2/3 flex flex-col justify-center p-4 md:p-8">
          <h2 className="text-2xl xl:text-3xl font-bold mb-2">{Title}</h2>
          <p className="text-base md:text-lg xl:text-xl line-clamp-5 lg:line-clamp-2">{Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default EpisodeDetail;
