import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'
import { AuthProvider } from './context/authenticate'
import { MoviesProvider } from './context/movies'

const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <AuthProvider>
            <MoviesProvider>
                <MovieApp />
            </MoviesProvider>
        </AuthProvider>
    </React.StrictMode>
)
