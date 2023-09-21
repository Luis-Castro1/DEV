import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

export const ProfileEditContext = createContext()


export function ProfileEdit({ children }) {

    const { user } = useAuth();
    const userLoginData = localStorage.getItem("userToken");

    let initialAccessToken = '';
    let initialRefreshToken = '';

    if (userLoginData) {
        try {
            const parsedData = JSON.parse(userLoginData);
            initialAccessToken = parsedData.accessToken || '';
            initialRefreshToken = parsedData.refreshToken || '';

        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    useEffect(() => {
        setOlderPassword(user.password)
        setUserId(user.id)
    }, [user])

    const [accessToken, setAccessToken] = useState(initialAccessToken);
    const [refreshToken, setRefreshToken] = useState(initialRefreshToken);
    const [olderPassword, setOlderPassword] = useState('');
    const [userId, setUserId] = useState();


    const updateInfo = async (newEmail, newPassword, newName, passState) => {

        try {


            await axios.put(`https://api.escuelajs.co/api/v1/users/${userId}`, {

                email: newEmail,
                password: newPassword,
                name: newName,
                role: 'customer',
                avatar: "https://picsum.photos/640/640?r=3170",

            }).then(response => {
                console.log(response)
                passState(true)
            })


        } catch (error) {
            console.error('Error de inicio de sesión:', error);
        }
    }

    const createUser = async (userEmail, userPassword, userName, stateError, stateLoad, stateOk) => {
        try {
            stateLoad(true); // Indica que la carga está en progreso

            const response = await axios.post('https://api.escuelajs.co/api/v1/users/',
                {
                    email: userEmail,
                    password: userPassword,
                    name: userName,
                    role: 'customer',
                    avatar: "https://picsum.photos/640/640?r=3170",
                }).then((response) => {
                    stateOk(true)
                })
                


            const users = await axios.get('https://api.escuelajs.co/api/v1/users')


        } catch (error) {

            console.error('Error de creación de cuenta:', error);
            stateError(false);

        } finally {

            stateLoad(false); // Indica que la carga ha finalizado
            stateError(true);
        }
    };



    return (
        <ProfileEditContext.Provider value={{
            updateInfo,
            olderPassword,
            createUser
        }}
        >
            {children}
        </ProfileEditContext.Provider>
    )
}

export const useProfileEdit = () => useContext(ProfileEditContext);