import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

//Crear contexto
export const AuthContext = createContext()

export function AuthProvider({ children }) {


    const userLoginData = localStorage.getItem("userToken");
    let initialEmail = '';
    let initialPassword = '';
    let initialAuthenticated = '';

    if (userLoginData) {
        try {
            const parsedData = JSON.parse(userLoginData);
            initialEmail = parsedData.email || '';
            initialPassword = parsedData.password || '';
            initialAuthenticated = parsedData.auth || ('');

        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPassword);
    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated)

    const saveData = (emailData, passwordData, AuthenticatedData) => {
        const dataToServer = {
            email: emailData,
            password: passwordData,
            auth: AuthenticatedData,
        };
        localStorage.setItem("userToken", JSON.stringify(dataToServer));
    }


    const login = async (userEmail, userPassword, stateError, stateLoad) => {

        
        try {

            stateLoad(true)

            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username: userEmail,
                password: userPassword,
            });

            const token = response.data.token;
            // Almacena el token en el estado global o en una cookie según tus necesidades
            console.log('Token:', token);

            setIsAuthenticated(true);
      

        } catch (error) {
            console.error('Error de inicio de sesión:', error);
            stateError(true);
        }

        finally {
            stateLoad(false)
        }
    };


    const logout = () => {

        setIsAuthenticated(false);
        setEmail('');
        setPassword('')

        saveData('', '', false)

    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            logout,
            email,
            password,
            login
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);