import React, { createContext, ReactNode, useContext, useState } from 'react'

const AuthContext = createContext(null)
const AuthDispatchContext = createContext(null)

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={isAuthenticated}>
            <AuthDispatchContext.Provider value={setIsAuthenticated}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export const useIsAuthenticated = () => {
    return useContext(AuthContext)
}

export const useSetIsAuthenticated = () => {
    const setIsAuthenticated = useContext(AuthDispatchContext)
    return (isAuthenticated: boolean) => setIsAuthenticated(isAuthenticated)
}
