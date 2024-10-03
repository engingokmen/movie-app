import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovieById, useMovies } from '../../context/movies'
import { ImdbScore } from '../../components/ImdbScore'

export const Detail = () => {
    const { id } = useParams()
    const movies = useMovies()
    const movie = getMovieById(movies, id)

    return (
        <div className="movie-detail">
            <Link to="/movies" className="back-link">
                Back to movies
            </Link>
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
    )
}
