import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EpisodeCard, { EpisodeCardProps } from '../EpisodeCard'; 

const mockProps = {
    Poster: 'https://test-poster.jpg',
    Episode: '5',
    Title: 'Better-Like',
    Plot: 'This is a sample plot for testing purposes.'
};

const customRender = (props: EpisodeCardProps) => render(<EpisodeCard {...props} />);

describe('EpisodeCard', () => {
    test('should render snapshot', () => {
        const { asFragment } = customRender({...mockProps})
        
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the episode number correctly', () => {
        customRender({ ...mockProps })
        
        const episodeNumber = screen.getByText('5');

        expect(episodeNumber).toBeInTheDocument();
    });

    test('renders the title correctly', () => {
        customRender({ ...mockProps })

        const title = screen.getByText('Better-Like');

        expect(title).toBeInTheDocument();
    });

    test('renders the plot correctly', () => {
        customRender({ ...mockProps })
        
        const plot = screen.getByText(/This is a sample plot for testing purposes./i);

        expect(plot).toBeInTheDocument();
    });
});
