import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faUser, faPhone, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Input } from '../componente-input/input';

export const Registro = () => {

  const [EMAIL, cambiarEMAIL] = useState({ campo: '', valido: null });
  const [PASSWORD, cambiarPASSWORD] = useState({ campo: '', valido: null });
  const [NOMBRE, cambiarNOMBRE] = useState({ campo: '', valido: null });
  const [APELLIDO, cambiarAPELLIDO] = useState({ campo: '', valido: null });
  const [TELEFONO, cambiarTELEFONO] = useState({ campo: '', valido: null });

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
    password: /^.{4,12}$/, // 4 a 12 digitos.
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}



  return (

    <div className='flex justify-center items-center h-screen'>
      <div className='h-[580px] w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className='h-full flex flex-col pt-6 items-center'>
          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">REGISTRATE</h1>

          <Input
          estado={EMAIL}
          cambiarEstado={cambiarEMAIL}
            tipo="text"
            icono={faEnvelope}
            label="E-MAIL"
            name="e-mail"
            leyendaError="Solo puede contener letras, numeros, puntos, guiones y guion bajo"
            expresionRegular={expresiones.correo}
          />




          <div className='mt-5 relative font-darker-grotesque text-[16px] right-8'>
            <input type="checkbox" className='cursor-pointer ' />   He leido y acepto las <a href="..//Pages/Politica y Privacidad Dev-Soft.pdf" target="_blank"><b>politicas de privacidad</b></a>
          </div>


          {false && <div className='pt-2 bg-red-400 h-[35px] w-[350px] rounded-[3px]'>
            <p className='text-[14px] font-sans'>
              <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
              <b className='ml-2'>Error:</b> porfavor rellene los campos correctamente
            </p>
          </div>}
          <div className='flex items-center flex-col font-darker-grotesque'>
            <input type="button" value="CREAR CUENTA" className='py-1 mt-4 block w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
          </div>
          <p className='text-[13px] font-sans text-green-600 hidden'>su cuenta se ha creado correctamente!</p>
        </div>
      </div>


    </div>


  )
}
