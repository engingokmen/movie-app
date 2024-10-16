import React from 'react'
import { Search } from '../search'
import { useFavorites } from '../../context/favorites'
import { texts } from '../../texts'
import { useMatch } from 'react-router-dom'
import { useMovieById } from '../../context/movies'
import { PUBLIC_URL } from '../../settings'

export const Header = () => {
    const matchHome = useMatch(PUBLIC_URL)
    const matchMovies = useMatch(`${PUBLIC_URL}movies`)
    const matchDetail = useMatch(`${PUBLIC_URL}movies/:id`)
    const favorites = useFavorites()
    const movie = useMovieById(matchDetail?.params?.id)

    let title
    if (matchHome) {
        title = <h1>{texts.appTitle}</h1>
    } else if (matchMovies) {
        title = (
            <>
                <Search />
                <p className="header-favorites">
                    <strong>{texts.favorites}</strong> {favorites.length}
                </p>
            </>
        )
    } else if (matchDetail) {
        title = <h1>{movie?.name}</h1>
    }

    return <header>{title}</header>
}
