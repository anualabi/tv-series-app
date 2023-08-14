import { NextResponse } from 'next/server';
import { SeriesProps } from '@/types';
import { SERIES_TITLE } from '@/constants';

const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.DATA_API_KEY
const series = SERIES_TITLE;

export async function GET() {
    const dataSourceUrl = `${BASE_URL}?apikey=${API_KEY}&t=${series}`;

    try {
        const res = await fetch(dataSourceUrl)

        const data: SeriesProps = await res.json()
        
        return NextResponse.json(data)
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'An error occurred';
        throw new Error(`Error fetching data: ${errorMessage}`)
    }

}
