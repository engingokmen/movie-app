import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react'

const AuthContext = createContext(false)
const AuthDispatchContext = createContext<Dispatch<SetStateAction<boolean>>>(
    () => false
)

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
