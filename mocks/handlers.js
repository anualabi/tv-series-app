import { rest } from 'msw';
import series from '../src/__data__/series.json'
import season from '../src/__data__/season.json'
import episode from '../src/__data__/episode.json'

export const handlers = [
  rest.get('/api/insecure', (req, res, ctx) => {
    return res(ctx.json(series));
  }),
  rest.get('/api/insecure/seasons/3', (req, res, ctx) => {
    return res(ctx.json(season));
  }),
  rest.get('/api/insecure/seasons/3/episodes/1', (req, res, ctx) => {
    return res(ctx.json(episode));
  })
];