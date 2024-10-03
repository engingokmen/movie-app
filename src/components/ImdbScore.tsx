import React from 'react'
import imdb from '../assets/imdb.png'

interface ImdbScoreProps {
    score: string
}

export const ImdbScore = ({ score }: ImdbScoreProps) => {
    return (
        <p className="icon-score">
            <img src={imdb} alt="imdb" width="35px" />
            <span className="text-dark">{score} / 100</span>
        </p>
    )
}
