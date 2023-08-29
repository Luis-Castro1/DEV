import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
export const Login = () => {


  const Login = () => {
    useEffect(() => {
      const input = document.getElementById('email');
      const label = document.getElementById('email_label');
  
      const handleInput = event => {
        if (event.target.value) {
          ['border-gray-400', 'border-b-2'].forEach(c => input.classList.add(c));
          ['top-14'].forEach(c => label.classList.add(c));
        } else {
          ['border-gray-400', 'border-b-2'].forEach(c => input.classList.remove(c));
          ['top-14'].forEach(c => label.classList.remove(c));
        }
      };
  
      input.addEventListener('input', handleInput);
  
      return () => {
        input.removeEventListener('input', handleInput);
      };
    }, []);
  return (

    <div className='flex justify-center items-center h-screen'>
      <div className='h-[420px] w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <form className='h-full flex flex-col pt-6 items-center'>
          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">ACCEDE A TU CUENTA </h1>

          <div className='pt-20 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faUser} className='absolute left-[-20px] leading-[30px]'/>
            <input type="text" id="email" className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-400 transition-colors peer'/>
          <label htmlFor="email" id='email_label' className='absolute left-0 text-gray-400 text-[13px] cursor-text peer-focus:top-14 ease-in-out duration-500'>E-MAIL</label>
          </div>

          <div className='pt-10 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faLock} className='absolute left-[-20px] leading-[30px]' />
            <input type="password" id='contraseña' className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-400 ease-in-out-colors peer' />
            <label htmlFor="contraseña" className='absolute left-0 text-gray-400 text-[13px] cursor-text peer-focus:top-4 ease-in-out duration-500'>CONTRASEÑA</label>
          </div>

          <div className='flex items-center flex-col pt-10 font-darker-grotesque  '>
            <input type="button" value="INICIAR SESION" className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
            <input type="button" value="REGISTRATE" className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm'/>
          </div>

          <div className='relative left-[-55px] font-sans'>
            <a className='text-gray-400 hover:text-gray-600 text-[14px]' href="">¿Has olvidado la contraseña?</a>
          </div>

        </form>
      </div>


    </div>


  )
}} 
