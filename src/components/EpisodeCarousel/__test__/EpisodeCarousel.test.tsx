import React from 'react';
import { render } from '@testing-library/react';
import EpisodeCarousel from '../EpisodeCarousel';
import '@testing-library/jest-dom/extend-expect';
import { EpisodesProps } from '@/types';

const mockProps = [
    {
        Title: 'Better-Like',
        Plot: 'This is a sample plot for testing purposes.',
        Released: '2018-08-12',
        Episode: '5',
        Poster: 'https://test-poster1.jpg',
        imdbRating: '9.0',
        imdbID: '123'
    },
    {
        Title: 'Familiar-Like',
        Plot: 'This is a sample plot for testing purposes.',
        Released: '2018-08-19',
        Episode: '6',
        Poster: 'https://test-poster2.jpg',
        imdbRating: '8.5',
        imdbID: '456'
    },
]

const customRender = (props: EpisodesProps) => render(<EpisodeCarousel episodes={props} />);

describe('EpisodeCarousel', () => {
    test('should render snapshot', () => {
        const { asFragment } = customRender(mockProps)
        
        expect(asFragment()).toMatchSnapshot();
    });
});
