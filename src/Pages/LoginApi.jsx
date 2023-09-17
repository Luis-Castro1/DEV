import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';

function LoginApi() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState();
    const [showLoad, setShowLoad] = useState(false)

    const { login } = useAuth();

    useEffect(() => {
        console.log("login api error " + showError);
    }, [showError]); // Esto se ejecutará cada vez que showError cambie

    const handleLogin = (e) => {
        e.preventDefault();
        setShowError(false)
        login(username, password, setShowError, setShowLoad);
        // No intentes acceder a showError aquí, ya que no se habrá actualizado aún
    }

    return (
        <div className='flex gap-y-4 flex-col'>

            {showLoad && (
                <div className="loader-container fixed top-0 left-0 w-full h-full bg-black/50 flex
        justify-center  items-center z-[9999]">
                    {/* Agrega aquí tu animación de carga */}
                    <div className="loader  border-[3px] border-[#f3f3f3]  border-t-[3px] border-t-[#3498db] rounded-[50%] w-[50px] h-[50px] animate-[spin_2s_linear_infinite]"></div>
                </div>
            )}

            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {showError && (
                <p>Usuario o contraseña incorrecta</p>
            )}
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
}

export default LoginApi;
