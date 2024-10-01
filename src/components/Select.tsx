import React, { useState } from 'react'
import { FilterSortButton } from './FilterSortButton'
import { CircleToggle } from './CircleToggle'
import { useOutsideClick } from '../hooks/useOutsideClick'

interface SelectProps {
    label: string
    icon: JSX.Element
    options: { label: string; value: string }[]
    selected: string
    onChange: (e: any) => void
}

export const Select = ({
    label,
    icon,
    options,
    selected,
    onChange,
}: SelectProps) => {
    const [className, setClassName] = useState('')

    const handleOutsideClick = () => {
        setClassName('')
    }

    const ref = useOutsideClick(handleOutsideClick)

    const optionListDiv = options.map((option) => {
        const isSelected = selected === option.value ? 'selected' : ''

        return (
            <div
                key={option.value}
                data-value={option.value}
                className={`option ${isSelected}`}
            >
                {option.label}
            </div>
        )
    })

    const handleClick = () => {
        if (className) {
            setClassName('')
        } else {
            setClassName('show')
        }
    }

    const handleChange = (e: any) => {
        onChange(e)
        setClassName('')
    }

    const isSelected = selected !== 'all'
    return (
        <div ref={ref} className="select-container">
            <FilterSortButton onClick={handleClick}>
                {label}
                {icon}
                <CircleToggle show={isSelected} />
            </FilterSortButton>
            <div className={`select ${className}`} onClick={handleChange}>
                {optionListDiv}
            </div>
        </div>
    )
}
