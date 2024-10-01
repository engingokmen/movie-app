import React from 'react'

interface FilterSortButtonProps {
    onClick: () => void
    children: React.ReactNode
}

export const FilterSortButton = ({
    onClick,
    children,
}: FilterSortButtonProps) => {
    return (
        <button className="reset-button filter-sort-button" onClick={onClick}>
            {children}
        </button>
    )
}
