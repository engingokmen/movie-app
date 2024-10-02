import React, { createContext, ReactNode, useContext, useReducer } from 'react'
import { texts } from '../texts'
import { FilterOptionsEnum, SortOptionsEnum } from '../types'

export const filterOptions = [
    { value: '', label: texts.all },
    { value: FilterOptionsEnum.favorites, label: texts.favorites },
    { value: FilterOptionsEnum.newReleases, label: texts.newReleases },
]

export const sortOptions = [
    { value: '', label: texts.remove },
    { value: SortOptionsEnum.name, label: texts.filmName },
    { value: SortOptionsEnum.year, label: texts.releaseDate },
    { value: SortOptionsEnum.imdb, label: texts.imdbScore },
]

const initialState = {
    search: '',
    sort: '',
    filter: '',
}

const FilterContext = createContext(initialState)
const FilterDispatchContext = createContext(null)

interface FilterProviderProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [filters, dispatch] = useReducer(reducer, initialState)

    return (
        <FilterContext.Provider value={filters}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(FilterContext)
}

export const useFilterDispatch = () => {
    return useContext(FilterDispatchContext)
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            }
        case 'SET_SORT':
            return {
                ...state,
                sort: action.payload,
            }
        default:
            return state
    }
}

// ACTION CREATORS

export const changeInput = (value: string) => ({
    type: 'SET_SEARCH',
    payload: value,
})

export const changeSort = (value: string) => ({
    type: 'SET_SORT',
    payload: value,
})

export const changeFilter = (value: string) => ({
    type: 'SET_FILTER',
    payload: value,
})
