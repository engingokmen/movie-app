export interface IMovie {
    id: string
    name: string
    year: number
    country: string
    imdb: string
    category: string
    isTvSeries: boolean
    summary: string
    poster: string
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

export interface FavoritesAction {
    addToFavorites: (id: string) => void
    removeFromFavorites: (id: string) => void
}

export type ACTIONTYPE = { type: string; payload: string }
