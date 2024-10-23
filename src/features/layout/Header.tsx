import React from 'react'
import { Search } from '../search'
import { useFavorites } from '../../context/favorites'
import { texts } from '../../texts'
import { useMatch } from 'react-router-dom'
import { useMovieById } from '../../context/movies'
import { BASE_URL } from '../../settings'

export const Header = () => {
    const matchHome = useMatch(BASE_URL)
    const matchMovies = useMatch(`${BASE_URL}movies`)
    const matchDetail = useMatch(`${BASE_URL}movies/:id`)
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
