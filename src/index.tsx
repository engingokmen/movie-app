import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'
import { AuthProvider } from './context/authenticate'

const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <AuthProvider>
            <MovieApp />
        </AuthProvider>
    </React.StrictMode>
)
