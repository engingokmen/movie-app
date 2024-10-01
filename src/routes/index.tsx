import React from 'react'
import { useIsAuthenticated } from '../context/authenticate'
import { Movies } from '../features/movies'
import { Login } from '../features/login'

// react-router-dom could be used instead of this simple router
export const Routes = () => {
    const isAuthenticated = useIsAuthenticated()

    if (isAuthenticated) return <Movies />

    return <Login />
}
