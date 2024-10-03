import React, { createContext, useContext, useEffect, useState } from 'react'
import { FilterOptionsEnum, IMovie, SortOptionsEnum } from '../types'
import { useIsAuthenticated } from './authenticate'
import { useFilter } from './filters'
import { useFavorites } from './favorites'

const MoviesContext = createContext<IMovie[]>(null)

interface MoviesProviderProps {
    children: React.ReactNode
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<IMovie[]>(null)
    const isAuthenticated = useIsAuthenticated()

    const getMovies = async () => {
        const response = await fetch(`${process.env.DB}/movies`)
        const data = await response.json()
        setMovies(data)
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

    const movies = useContext(MoviesContext)

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
    return useContext(MoviesContext)
}

// SELECTORS

const searchMovies = (movies: IMovie[], search: string) => {
    if (movies === null) {
        return movies
    }

    return movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    })
}

const getMoviesOnFavorites = (
    movies: IMovie[],
    favorites: string[],
    filter: string
) => {
    if (movies === null || !filter) {
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
    if (movies === null || !sort) {
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

export const getMovieById = (movies: IMovie[], id: string | null) => {
    if (!id) return
    return movies.find((movie) => movie.id === id)
}
