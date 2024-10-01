import React from 'react'
import { useMovies } from '../../context/movies'

export const Movies = () => {
    const movies = useMovies()

    const moviesList = movies.map((movie) => (
        <li key={movie.id}>
            <h2>{movie.name}</h2>
            <p>{movie.summary}</p>
        </li>
    ))

    return <ul>{moviesList}</ul>
}
