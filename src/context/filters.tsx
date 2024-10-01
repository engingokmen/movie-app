import React, { createContext, ReactNode, useContext, useReducer } from 'react'

export const options = [
    { value: 'all', label: 'All' },
    { value: 'favorites', label: 'Favorites' },
    { value: 'new', label: 'New releases' },
]

const initialState = {
    search: '',
    sort: 'all',
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
