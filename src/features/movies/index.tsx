import React from 'react'
import { useFilteredMovies } from '../../context/movies'
import { AddToFavoritesButton } from '../favorites/AddToFavoritesButton'
import { SubHeader } from './SubHeader'
import { Link } from 'react-router-dom'
import { ImdbScore } from '../../components/ImdbScore'

export const Movies = () => {
    const filteredMovies = useFilteredMovies()

    if (filteredMovies === null || filteredMovies === undefined) {
        return <p>Loading...</p>
    }

    const filteredMoviesList = filteredMovies.map((movie) => (
        <li key={movie.id} className="relative">
            <Link to={movie.id} key={movie.id} className="movie-card">
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
            <ul className="movie-list">{filteredMoviesList}</ul>
        </>
    )
}
