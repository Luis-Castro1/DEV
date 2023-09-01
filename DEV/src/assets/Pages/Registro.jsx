import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { Input } from '../componente-input/input';

export const Registro = () => {







  return (
    
    <div className='flex justify-center items-center h-screen'>
      <div className='h-[580px] w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <form className=''>
       <Input/>
       
        </form>
      </div>


    </div>


  )
}
