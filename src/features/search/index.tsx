import React from 'react'
import {
    changeInput,
    useFilter,
    useFilterDispatch,
} from '../../context/filters'

export const Search = () => {
    const { search } = useFilter()
    const dispatch = useFilterDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInput(e.target.value))
    }

    return (
        <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
        />
    )
}
