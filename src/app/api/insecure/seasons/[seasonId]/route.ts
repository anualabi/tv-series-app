import { NextResponse } from 'next/server';
import episodeDetails from '@/data/episodeDetails.json'
import { SeasonProps } from '@/types';
import { extractNumberFromPathname } from '@/utilities';
import { SERIES_TITLE } from '@/constants';

interface LocalEpisodeDetails {
    [imdbID: string]: {
        Poster: string;
        Plot: string;
    };
}

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.DATA_API_KEY
const series = SERIES_TITLE;
const localDetails = episodeDetails as LocalEpisodeDetails;

export async function GET(request: Request) {
    const params = new URL(request.url)
    const seasonId = extractNumberFromPathname(params.pathname, 'seasons'); 
    
    const dataSourceUrl = `${BASE_URL}?apikey=${API_KEY}&t=${series}&Season=${seasonId}`;

    try {
        const res = await fetch(dataSourceUrl)

        let data: SeasonProps = await res.json()

        data.Episodes = data?.Episodes?.map(episode => ({
            ...episode,
            ...localDetails[episode.imdbID]
        }));
        
        return NextResponse.json(data)
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'An error occurred';
        throw new Error(`Error fetching data: ${errorMessage}`)
    }

}
