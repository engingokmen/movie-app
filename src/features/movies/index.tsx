import React from 'react'
import { useMovies } from '../../context/movies'
import { AddToFavoritesButton } from '../favorites/AddToFavoritesButton'

export const Movies = () => {
    const movies = useMovies()

    if (movies === null) {
        return <p>Loading...</p>
    }

    const moviesList = movies.map((movie) => (
        <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>{movie.summary}</p>
            <AddToFavoritesButton id={movie.id} />
        </li>
    ))

    return <ul>{moviesList}</ul>
}
