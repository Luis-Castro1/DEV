import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../context/AuthProvider';

export const Login = () => {

  const { isAuthenticated, login } = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  console.log(isAuthenticated)

  const userLogin = () => {
    setErrorLogin(false)
    login(userEmail, userPassword, setErrorLogin, setLoading);
    // No intentes acceder a showError aquí, ya que no se habrá actualizado aún

  }


  useEffect(() => {

    if (isAuthenticated === true) {
      return <Navigate to="/perfil" />;
    }

    const emailInput = document.getElementById('email_input');
    const passwordInput = document.getElementById('pass_input');

    const handleInput = event => {
      const input = event.target;
      const label = input.nextElementSibling;

      if (input.value) {
        input.classList.add('border-gray-400', 'border-b-2');
        label.classList.add('-translate-y-5');
      } else {
        input.classList.remove('border-gray-400', 'border-b-2');
        label.classList.remove('-translate-y-5');
      }
    };

    emailInput.addEventListener('input', handleInput);
    passwordInput.addEventListener('input', handleInput);

    return () => {
      emailInput.removeEventListener('input', handleInput);
      passwordInput.removeEventListener('input', handleInput);
    };
  }, []);

  useEffect(() => {
    console.log("login api error " + errorLogin);
  }, [errorLogin]); // Esto se ejecutará cada vez que showError cambie

  const submitInfo = (e) => {
    e.preventDefault();

    if (!userEmail || !userPassword) {
      console.log("error")
      setErrorText(true)

    } else {

      userLogin();

    }

  }

  if (isAuthenticated) {
    return navigate('/perfil'); // Usa la función navigate para redirigir al usuario
  }



  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='h-auto w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <form className='h-full flex flex-col pt-6 items-center'>

          {loading && (
            <div className="loader-container fixed top-0 left-0 w-full h-full bg-black/50 flex
        justify-center  items-center z-[9999]">
              {/* Agrega aquí tu animación de carga */}
              <div className="loader  border-[3px] border-[#f3f3f3]  border-t-[3px] border-t-[#3498db] rounded-[50%] w-[50px] h-[50px] animate-[spin_2s_linear_infinite]"></div>
            </div>
          )}

          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">ACCEDE A TU CUENTA</h1>


          <div className=' mt-20 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faUser} className='absolute left-[-20px] leading-[30px]' />

            <input
              className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer'
              id="email_input"
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <label htmlFor="email" id='email_label' className='absolute left-0 text-gray-400 text-[13px] transition-all duration-500 pointer-events-none peer-focus:-translate-y-5'>E-MAIL</label>
          </div>

          <div className='mt-10 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faLock} className='absolute left-[-20px] leading-[30px]' />

            <input
              className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer'
              id="pass_input"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <label htmlFor="contraseña" id='pass_label' className='absolute left-0 text-gray-400 text-[13px] transition-all duration-500 pointer-events-none peer-focus:-translate-y-5'>CONTRASEÑA</label>
          </div>

          {errorText && (

            <div className='flex text-red-600 mt-5 justify-center'>
              <p className='text-[14px]'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
                <b className='ml-2'>Error:</b> Por favor rellene los campos correctamente.
              </p>
            </div>

          )}

          {errorLogin && (
            <p>Usuario o contraseña incorrecta</p>
          )}

          <div className={`flex items-center flex-col ${!errorLogin ? 'pt-10' : 'mt-5'} font-darker-grotesque `}>

            <input
              onClick={submitInfo}
              type="submit"
              value="INICIAR SESION"
              className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-[500] text-sm ' />

            <Link to='/register' className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-[500] text-sm text-center'>
              <button
                type="button"
              >REGISTRATE
              </button>
            </Link>

          </div>

          <div className='relative left-[-55px] '>
            <a className='text-gray-400 hover:text-gray-600 text-[14px]' href="">¿Has olvidado la contraseña?</a>
          </div>

        </form>
      </div>


    </div>


  )

}