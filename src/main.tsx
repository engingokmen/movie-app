import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { MovieApp } from './MovieApp'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(<MovieApp />)
