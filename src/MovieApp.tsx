import React from 'react'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

export const MovieApp = () => {
    return <RouterProvider router={router} />
}
