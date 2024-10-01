import React, { createContext, useContext, useEffect, useState } from 'react'
import { IMovie } from '../types'
import { useIsAuthenticated } from './authenticate'

const MoviesContext = createContext<IMovie[] | []>([])

interface MoviesProviderProps {
    children: React.ReactNode
}

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<IMovie[] | []>([])
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
    return useContext(MoviesContext)
}
