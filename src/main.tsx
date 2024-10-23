import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'

if (typeof window !== 'undefined') {
    const element = window.document.getElementById('app') as HTMLElement
    const root = createRoot(element)
    root.render(<MovieApp />)
}
