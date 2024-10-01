import React, { createContext, useContext, useEffect, useState } from 'react'
import { IMovie } from '../types'
import { useIsAuthenticated } from './authenticate'
import { useFilter } from './filters'

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

export const useMovies = () => {
    const { search } = useFilter()
    const movies = useContext(MoviesContext)
    const searchedMovies = searchMovies(movies, search)

    return searchedMovies
}

const searchMovies = (movies: IMovie[], search: string) => {
    if (movies === null) {
        return movies
    }

    return movies.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    })
}
