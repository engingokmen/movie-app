import React from 'react'
import { useMovies } from '../../context/movies'
import { AddToFavoritesButton } from '../favorites/AddToFavoritesButton'
import { SubHeader } from './SubHeader'
// disable-eslint-next-line
import imdb from '../../assets/imdb.png'

export const Movies = () => {
    const movies = useMovies()

    if (movies === null) {
        return <p>Loading...</p>
    }

    const moviesList = movies.map((movie) => (
        <li key={movie.id} className="movie-card">
            <img
                src={movie.poster}
                alt={movie.name}
                width="250px"
                height="370px"
            />
            <p className="text-gray-small">
                {movie.country}, {movie.year}
            </p>
            <h2 className="text-dark movie-name">{movie.name}</h2>
            <p className="icon-score">
                <img src={imdb} alt="imdb" width="35px" />
                <p className="text-dark">{movie.imdb} / 100</p>
            </p>
            <p className="text-gray-small">{movie.category}</p>
            <AddToFavoritesButton id={movie.id} />
        </li>
    ))

    return (
        <>
            <SubHeader />
            <ul className="movie-list">{moviesList}</ul>
        </>
    )
}
