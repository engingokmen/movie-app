import React, { createContext, useContext, useEffect, useState } from 'react'
import { FilterOptionsEnum, IMovie, SortOptionsEnum } from '../types'
import { useIsAuthenticated } from './authenticate'
import { useFilter } from './filters'
import { useFavorites } from './favorites'

const MoviesContext = createContext<IMovie[] | null>(null)

interface MoviesProviderProps {
    children: React.ReactNode
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<IMovie[] | null>(null)
    const isAuthenticated = useIsAuthenticated()

    const getMovies = async () => {
        const response = await fetch('db.json')
        const { movies } = await response.json()
        setMovies(movies)
    }

    useEffect(() => {
        if (isAuthenticated) {
            getMovies()
        }
    }, [isAuthenticated])

    return (
        <MoviesContext.Provider value={movies}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useFilteredMovies = () => {
    const { search, filter, sort } = useFilter()
    const favorites = useFavorites()

    const movies = useMovies()

    if (!movies) {
        return null
    }

    const searchedMovies = searchMovies(movies, search)
    const moviesOnFavorites = getMoviesOnFavorites(
        searchedMovies,
        favorites,
        filter
    )
    const sortedMovies = sortMovies(moviesOnFavorites, sort)

    return sortedMovies
}

export const useMovies = () => {
    const movies = useContext(MoviesContext)
    return movies
}

export const useMovieById = (id: string | null | undefined) => {
    const movies = useMovies()
    return getMovieById(movies, id)
}

// SELECTORS

const searchMovies = (movies: IMovie[], search: string) => {
    return movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    })
}

const getMoviesOnFavorites = (
    movies: IMovie[],
    favorites: string[],
    filter: string
) => {
    if (!filter) {
        return movies
    }

    if (filter === FilterOptionsEnum.favorites) {
        return movies.filter((movie) => favorites.includes(movie.id))
    }

    if (filter === FilterOptionsEnum.newReleases) {
        return movies.filter(
            (movie) => movie.year > new Date().getFullYear() - 6
        )
    }

    return movies
}

const sortMovies = (movies: IMovie[], sort: string) => {
    if (!sort) {
        return movies
    }

    if (sort === SortOptionsEnum.name) {
        return movies.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            }

            return 0
        })
    }

    if (sort === SortOptionsEnum.year) {
        return movies.sort((a, b) => {
            if (a.year > b.year) {
                return -1
            } else if (a.year < b.year) {
                return 1
            }

            return 0
        })
    }

    if (sort === SortOptionsEnum.imdb) {
        return movies.sort((a, b) => {
            if (a.imdb > b.imdb) {
                return -1
            } else if (a.imdb < b.imdb) {
                return 1
            }

            return 0
        })
    }
}

const getMovieById = (
    movies: IMovie[] | null,
    id: string | null | undefined
) => {
    if (!id || !movies?.length) return null
    return movies.find((movie) => movie.id === id)
}
