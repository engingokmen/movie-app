import React from 'react'
import { Search } from '../search'
import { useFavorites } from '../../context/favorites'
import { texts } from '../../texts'
import { useMatch } from 'react-router-dom'
import { getMovieById, useMovies } from '../../context/movies'

export const Header = () => {
    const matchHome = useMatch('/')
    const matchMovies = useMatch('/movies')
    const matchDetail = useMatch('/movies/:id')
    const favorites = useFavorites()
    const movies = useMovies()
    const movie = getMovieById(movies, matchDetail?.params.id)

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
        title = <h1>{movie.name}</h1>
    }

    return <header>{title}</header>
}
