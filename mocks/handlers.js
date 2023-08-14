import { rest } from 'msw';
import series from '../src/__data__/series.json'

export const handlers = [
  rest.get('/api/insecure', (req, res, ctx) => {
    return res(ctx.json(series));
  }),
];