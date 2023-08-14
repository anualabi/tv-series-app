import { NextResponse } from 'next/server';
import { EpisodeProps } from '@/types';
import { formatDate, extractNumberFromPathname } from "@/utilities";
import { SERIES_TITLE } from '@/constants';

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.DATA_API_KEY
const series = SERIES_TITLE;

export async function GET(request: Request) {
    const params = new URL(request.url)
    const seasonId = extractNumberFromPathname(params.pathname, 'seasons');  
    const episodeId = extractNumberFromPathname(params.pathname, 'episodes');

    const dataSourceUrl = `${BASE_URL}?apikey=${API_KEY}&t=${series}&Season=${seasonId}&Episode=${episodeId}`;

    try {
        const res = await fetch(dataSourceUrl)

        let data: EpisodeProps = await res.json()

        data = {...data, Released: formatDate(data.Released), imdbRating: '9'}

        return NextResponse.json(data)
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'An error occurred';
        throw new Error(`Error fetching data: ${errorMessage}`)
    }

}
