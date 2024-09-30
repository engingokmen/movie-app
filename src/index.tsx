import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { MovieApp } from './MovieApp'

const root = createRoot(document.getElementById('app'))
root.render(<MovieApp />)
