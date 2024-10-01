import React from 'react'
import {
    changeSort,
    options,
    useFilter,
    useFilterDispatch,
} from '../../context/filters'
import { Select } from '../../components/Select'
import { SortIcon } from '../../assets/SortIcon'
import { texts } from '../../texts'

export const Sort = () => {
    const { sort } = useFilter()
    const dispatch = useFilterDispatch()

    const handleChange = (e: any) => {
        dispatch(changeSort(e.target.dataset.value))
    }

    return (
        <Select
            label={texts.sort}
            icon={<SortIcon />}
            options={options}
            selected={sort}
            onChange={handleChange}
        />
    )
}
