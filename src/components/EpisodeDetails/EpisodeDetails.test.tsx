import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EpisodeDetail from './EpisodeDetails';
import { EpisodeProps } from '@/types'

const mockProps = {
    Title: 'Better-Like',
    Plot: 'Test plot description for the episode.',
    Poster: '/assets/episode-one.svg',
    Episode: '1',
    Released: '2023-08-10',
    imdbRating: '8.5',
};

const customRender = (props: EpisodeProps) => render(<EpisodeDetail data={props} />);

describe('EpisodeDetail', () => {
    test('should render snapshot', () => {
        const { asFragment } = customRender({...mockProps})
        
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the image with the correct alt text', () => {
        customRender({...mockProps})
        
        const imgElement = screen.getByAltText('Better-Like');
        
        expect(imgElement).toBeInTheDocument();
    });

    test('renders the episode details correctly', () => {
        customRender({ ...mockProps })
        
        expect(screen.getByText('Episode 1 — 2023-08-10')).toBeInTheDocument();
        expect(screen.getByText('Better-Like')).toBeInTheDocument();
        expect(screen.getByText('Test plot description for the episode.')).toBeInTheDocument();
        expect(screen.getByText('8.5')).toBeInTheDocument();
    });
});
