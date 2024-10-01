import React from 'react'
import { useDispatchFavorites, useFavorites } from '../../context/favorites'
import { Heart } from '../../assets/Heart'

interface AddToFavoritesButtonProps {
    id: string
}

export const AddToFavoritesButton = ({ id }: AddToFavoritesButtonProps) => {
    const favorites = useFavorites()
    const { addToFavorites, removeFromFavorites } = useDispatchFavorites()
    const isExist = favorites.includes(id)

    const handleClick = () => {
        isExist ? removeFromFavorites(id) : addToFavorites(id)
    }

    const icon = isExist ? <Heart className="active" /> : <Heart />

    return (
        <button className="reset-button" onClick={handleClick}>
            {icon}
        </button>
    )
}
