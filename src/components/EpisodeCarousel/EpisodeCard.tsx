import React from 'react'
import Image from 'next/image';

import { EpisodeProps } from '@/types';

export type EpisodeCardProps = Pick<EpisodeProps, 'Poster' | 'Episode' | 'Title' | 'Plot'>

const EpisodeCard: React.FC<EpisodeCardProps> = ({ Poster, Episode, Title, Plot }) => {
  return (
    <div className="overflow-hidden w-56">
      <div className="relative w-[201px] h-[134px]">
        <Image
          src={Poster}
          alt={`${Title} image`}
          style={{objectFit: "cover"}}	
          className="w-full h-full"
          width={201}
          height={134}
        />
        <div className="absolute top-0 left-0 bg-white w-[30px] h-[30px] flex items-center justify-center">
          <p className="text-sm font-bold text-black">{Episode}</p>
        </div>
      </div>
      <div className="py-4 bg-opacity-50 relative w-[201px] h-[138px]">
        <h2 className="text-sm md:text-base  text-white font-bold mb-2 line-clamp-1">{Title}</h2>
        <p className='text-xs md:text-sm text-white font-light line-clamp-3'>{Plot}</p>
      </div>
    </div>
  )
}

export default EpisodeCard
