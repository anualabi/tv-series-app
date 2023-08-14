import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import series from '../__data__/series.json';
import season from '../__data__/season.json'

import Home from '@/app/page'; 

const customRender = () => render(<Home />);

describe('HomePage', () => {

    test ('should render the series title', async () => {
        server.use(
            rest.get('/api/insecure', (req, res, ctx) => {
                return res(ctx.json(series));
            })
        );
        customRender()
        const title = await screen.findByText(/insecure/i)

        expect(title).toBeInTheDocument();
    });

    test ('should render episode title', async () => {
        server.use(
            rest.get('/api/insecure', (req, res, ctx) => {
                return res(ctx.json(season));
            })
        );
        customRender()
        const title = await screen.findByText(/familiar-like/i)

        expect(title).toBeInTheDocument();
    });


});
