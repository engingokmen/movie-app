export interface IMovie {
    id: string
    name: string
    year: number
    country: string
    imdb: string
    category: string
    isTvSeries: boolean
    summary: string
}

export enum FilterOptionsEnum {
    favorites = 'favorites',
    newReleases = 'newReleases',
}

export enum SortOptionsEnum {
    name = 'name',
    year = 'year',
    imdb = 'imdb',
}
