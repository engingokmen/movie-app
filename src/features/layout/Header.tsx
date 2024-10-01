import React from 'react'
import { useIsAuthenticated } from '../../context/authenticate'
import { Search } from '../search'
import { useFavorites } from '../../context/favorites'

export const Header = () => {
    const isAuthenticated = useIsAuthenticated()
    const favorites = useFavorites()

    const title = isAuthenticated ? <Search /> : <h1>Movies app</h1>
    const favoritesElement = isAuthenticated && (
        <p>Favriler {favorites.length}</p>
    )

    return (
        <header>
            {title}
            {favoritesElement}
        </header>
    )
}
