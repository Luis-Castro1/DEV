import { createContext, useContext, useState, useEffect } from "react";

//Crear contexto
export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const userLoginData = localStorage.getItem("userToken");
    let initialEmail = '';
    let initialPassword = '';
    let initialAuthenticated = '';

    const userInfo = { email: "luis", password: "1" };
    console.log(userInfo.email)

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


    const login = (userEmail, userPassword) => {


        if (userEmail === userInfo.email && userPassword === userInfo.password) {

            setIsAuthenticated(true)
            setEmail(userEmail);
            setPassword(userPassword);

            saveData(userEmail, userPassword, true);
            console.log(isAuthenticated)
            

        } else {
            setIsAuthenticated(false)
            console.log("error")
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
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