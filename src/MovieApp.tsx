import React from 'react'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/authenticate'
import { MoviesProvider } from './context/movies'
import { FavoritesProvider } from './context/favorites'
import { FilterProvider } from './context/filters'

export const MovieApp = () => {
    return (
        <React.StrictMode>
            <AuthProvider>
                <MoviesProvider>
                    <FilterProvider>
                        <FavoritesProvider>
                            <RouterProvider router={router} />
                        </FavoritesProvider>
                    </FilterProvider>
                </MoviesProvider>
            </AuthProvider>
        </React.StrictMode>
    )
}
