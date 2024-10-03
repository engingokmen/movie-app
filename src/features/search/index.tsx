import React from 'react'
import {
    changeInput,
    useFilter,
    useFilterDispatch,
} from '../../context/filters'
import { texts } from '../../texts'
import { SearchIcon } from '../../assets/SearchIcon'

export const Search = () => {
    const { search } = useFilter()
    const dispatch = useFilterDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInput(e.target.value))
    }

    return (
        <div className="search-input">
            <input
                type="text"
                placeholder={texts.searchPlaceholder}
                value={search}
                onChange={handleChange}
            />
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
    )
}
