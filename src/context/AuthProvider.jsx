import { createContext, useContext, useState, useEffect } from "react";

//Crear contexto
export const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{
            isAuthenticated
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);