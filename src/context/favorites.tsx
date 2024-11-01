import React, { createContext, useContext, useState } from 'react'
import { FavoritesAction } from '../types'

const FavoritesContext = createContext<string[]>([])
const FavoritesDispatchContext = createContext<FavoritesAction | null>(null)

interface FavoritesProviderProps {
    children: React.ReactNode
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
    const [favorites, setFavorites] = useState<string[] | []>([])

    const addToFavorites = (id: string) => {
        setFavorites([...favorites, id])
    }

    const removeFromFavorites = (id: string) => {
        setFavorites(favorites.filter((favorite) => favorite !== id))
    }

    return (
        <FavoritesContext.Provider value={favorites}>
            <FavoritesDispatchContext.Provider
                value={{ addToFavorites, removeFromFavorites }}
            >
                {children}
            </FavoritesDispatchContext.Provider>
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    return useContext(FavoritesContext)
}

export const useDispatchFavorites = () => {
    const favoritesDispatchContext = useContext(FavoritesDispatchContext)
    return favoritesDispatchContext
}
