import React from 'react'

import Carousel from '@/components/ui/Carousel';
import { EpisodesProps } from '@/types';

import EpisodeCard from './EpisodeCard';

export type EpisodeCarouselProps = {
  episodes: EpisodesProps
};

const EpisodeCarousel = ({ episodes }: EpisodeCarouselProps) => {

  const episodeList = episodes.map((episode) => (
    <EpisodeCard key={episode.imdbID} {...episode} />
  ))
  
  return (
    <div className='flex'>
      <Carousel items={episodeList} />
    </div>
  )
}

export default EpisodeCarousel;