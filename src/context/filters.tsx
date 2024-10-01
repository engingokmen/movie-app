import React, { createContext, ReactNode, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

interface FilterProviderProps {
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
    const [filters, dispatch] = useReducer(reducer, {})

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
        default:
            return state
    }
}

// ACTION CREATORS

export const changeInput = (value: string) => ({
    type: 'CHANGE_INPUT',
    payload: value,
})
