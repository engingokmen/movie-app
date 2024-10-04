import React, { ReactNode } from 'react'
import { Movies } from '../features/movies'
import { Login } from '../features/login'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../features/layout'
import { useIsAuthenticated } from '../context/authenticate'
import { Page404 } from '../components/Page404'
import { Detail } from '../features/detail'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'movies',
                element: <PrivateRoutes element={<Movies />} />,
            },
            {
                path: 'movies/:id',
                element: <PrivateRoutes element={<Detail />} />,
            },
            { path: '*', element: <Page404 /> },
        ],
    },
])

function PrivateRoutes({ element }: { element: ReactNode }) {
    const isAuthenticated = useIsAuthenticated()

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return element
}
