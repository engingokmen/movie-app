import React from 'react'
import { useIsAuthenticated } from '../../context/authenticate'
import { Search } from '../search'
import { useFavorites } from '../../context/favorites'
import { texts } from '../../texts'

export const Header = () => {
    const isAuthenticated = useIsAuthenticated()
    const favorites = useFavorites()

    const title = isAuthenticated ? <Search /> : <h1>{texts.appTitle}</h1>
    const favoritesElement = isAuthenticated && (
        <p className="header-favorites">
            <strong>{texts.favorites}</strong> {favorites.length}
        </p>
    )

    return (
        <header>
            {title}
            {favoritesElement}
        </header>
    )
}
