import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

//Crear contexto
export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const userLoginData = localStorage.getItem("userToken");

    let initialAccessToken = '';
    let initialRefreshToken = '';
    let initialAuthenticated = '';

    if (userLoginData) {
        try {
            const parsedData = JSON.parse(userLoginData);
            initialAccessToken = parsedData.accessToken || '';
            initialRefreshToken = parsedData.refreshToken || '';
            initialAuthenticated = parsedData.auth || ('');

        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    const [accessToken, setAccessToken] = useState(initialAccessToken);
    const [refreshToken, setRefreshToken] = useState(initialRefreshToken);
    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated)
    const [user, setUser] = useState([]);

    useEffect(() => {

        if (userLoginData) {

            getInfoUser(setUser, accessToken);
        }

    }, []);

    const saveData = (accessTokenData, refreshTokenData, AuthenticatedData) => {
        const dataToServer = {
            accessToken: accessTokenData,
            refreshToken: refreshTokenData,
            auth: AuthenticatedData,
        };
        localStorage.setItem("userToken", JSON.stringify(dataToServer));
    }

    const getInfoUser = async (setState, token) => {

        try {
            const userResponse = await axios.get(`https://api.escuelajs.co/api/v1/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const userDetails = userResponse.data;
            setState(userDetails);

        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }

    }


    const login = async (userEmail, userPassword, stateError, stateLoad) => {
        try {
            stateLoad(true); // Indica que la carga está en progreso

            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: userEmail,
                password: userPassword,
            });

            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;

            setIsAuthenticated(true)
            saveData(accessToken, refreshToken, true);



            getInfoUser(setUser, accessToken);



        } catch (error) {

            console.error('Error de inicio de sesión:', error);
            stateError(true);

        } finally {

            stateLoad(false); // Indica que la carga ha finalizado
        }
    };


    const logout = () => {

        setIsAuthenticated(false);
        setAccessToken('')
        setRefreshToken('');

        saveData('', '', false)
        localStorage.removeItem("userToken")
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            logout,
            user,
            login,
            getInfoUser,
            accessToken,
            refreshToken
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);