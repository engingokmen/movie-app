import React from 'react'
import { useMovies } from '../../context/movies'
import { AddToFavoritesButton } from '../favorites/AddToFavoritesButton'
import { SubHeader } from './SubHeader'
import { Link } from 'react-router-dom'
import { ImdbScore } from '../../components/ImdbScore'

export const Movies = () => {
    const movies = useMovies()

    if (movies === null) {
        return <p>Loading...</p>
    }

    const moviesList = movies.map((movie) => (
        <li key={movie.id} className="movie-card">
            <Link to={movie.id} key={movie.id}>
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
                <ImdbScore score={movie.imdb} />
                <p className="text-gray-small">{movie.category}</p>
            </Link>
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
