import React from 'react'
import {
    changeFilter,
    filterOptions,
    useFilter,
    useFilterDispatch,
} from '../../context/filters'
import { Select } from '../../components/Select'
import { FilterIcon } from '../../assets/FilterIcon'
import { texts } from '../../texts'

export const Filter = () => {
    const { filter } = useFilter()
    const dispatch = useFilterDispatch()

    const handleChange = (e: any) => {
        dispatch(changeFilter(e.target.dataset.value))
    }

    return (
        <Select
            label={texts.filter}
            icon={<FilterIcon />}
            options={filterOptions}
            selected={filter}
            onChange={handleChange}
        />
    )
}
