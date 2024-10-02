import React from 'react'
import { Sort } from '../sort'
import { Filter } from '../filter'

export const SubHeader = () => {
    return (
        <div className="sub-header">
            <h1>Movies</h1>
            <div className="flex gap">
                <Sort />
                <Filter />
            </div>
        </div>
    )
}
