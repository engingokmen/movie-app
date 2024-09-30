import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'

const root = createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <MovieApp />
    </React.StrictMode>
)
