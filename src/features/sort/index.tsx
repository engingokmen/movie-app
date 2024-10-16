import React from 'react'
import {
    changeSort,
    sortOptions,
    useFilter,
    useFilterDispatch,
} from '../../context/filters'
import { Select } from '../../components/Select'
import { SortIcon } from '../../assets/SortIcon'
import { texts } from '../../texts'

export const Sort = () => {
    const { sort } = useFilter()
    const dispatch = useFilterDispatch()
    if (dispatch === null) {
        return null
    }

    const handleChange = (e: any) => {
        dispatch(changeSort(e.target.dataset.value))
    }

    return (
        <Select
            label={texts.sort}
            icon={<SortIcon />}
            options={sortOptions}
            selected={sort}
            onChange={handleChange}
        />
    )
}
