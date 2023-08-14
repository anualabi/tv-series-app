export interface SeriesProps {
    Title: string;
    Year?: string;
    Rated?: string;
    Released: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster: string;
    Ratings?: [
        {
            Source: string;
            Value: string;
        }
    ],
    Metascore?: string;
    imdbRating: string;
    imdbVotes?:string;
    imdbID?: string;
    Type?: string;
    totalSeasons: string;
    Response?: string;
}

export type EpisodesProps = {
    Title: string;
    Plot: string;
    Released: string;
    Episode: string;
    Poster: string;
    imdbRating: string;
    imdbID: string;
}[]

export interface SeasonProps {
    Title: string;
    Plot?: string;
    Season: string;
    totalSeasons: string;
    Episodes: EpisodesProps,
    Response: string;
}

export interface EpisodeProps {
    Title: string;
    Year?: string;
    Rated?: string;
    Released: string;
    Season?: string;
    Episode: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster: string;
    Ratings?: [
        {
            Source: string;
            Value: string;
        }
    ],
    Metascore?: string;
    imdbRating: string;
    imdbVotes?:string;
    imdbID?: string;
    seriesID?: string;
    Type?: string;
    Response?: string;
}
