import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'
import { AuthProvider } from './context/authenticate'
import { MoviesProvider } from './context/movies'
import { FavoritesProvider } from './context/favorites'
import { FilterProvider } from './context/filters'

const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <AuthProvider>
            <MoviesProvider>
                <FilterProvider>
                    <FavoritesProvider>
                        <MovieApp />
                    </FavoritesProvider>
                </FilterProvider>
            </MoviesProvider>
        </AuthProvider>
    </React.StrictMode>
)
