import React from 'react'

interface CircleToggleProps {
    show: boolean
}

export const CircleToggle = ({ show }: CircleToggleProps) => {
    const className = show ? 'show' : ''
    return <div className={`circle-toggle ${className}`}></div>
}
