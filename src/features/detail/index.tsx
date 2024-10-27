import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMovieById } from '../../context/movies'
import { ImdbScore } from '../../components/ImdbScore'
import { AddToFavoritesButton } from '../favorites/AddToFavoritesButton'
import { BASE_URL } from '../../settings'

export const Detail = () => {
    const { id } = useParams()
    const movie = useMovieById(id)

    if (!movie) return null

    return (
        <>
            <div className="movie-detail">
                <Link to={`${BASE_URL}movies`} className="back-link">
                    Back to movies
                </Link>
                <AddToFavoritesButton id={movie.id} />
                <div className="poster-container">
                    <img src={movie.poster} alt={movie.name} />
                </div>
                <p className="movie-summary">{movie.summary}</p>
                <div className="seperator"></div>
                <div className="movie-card">
                    <ImdbScore score={movie.imdb} />
                    <p className="text-gray-small">{movie.category}</p>
                    <p className="text-gray-small">
                        {movie.country}, {movie.year}
                    </p>
                </div>
            </div>
        </>
    )
}
