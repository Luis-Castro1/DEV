import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, Navigate } from "react-router-dom"
import { Input } from '../componentes/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope, faUser, faPhone, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../context/AuthProvider';
import LoadingAnimation from '../componentes/LoadingAnimation';
import expresiones from '../hooks/expresiones'
import { useProfileEdit } from '../context/ProfileEdit';

export const Registro = () => {

  const auth = useAuth();
  const { createUser } = useProfileEdit();


  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const [EMAIL, cambiarEMAIL] = useState({ campo: '', valido: null });
  const [PASSWORD, cambiarPASSWORD] = useState({ campo: '', valido: null });
  const [NOMBRE, cambiarNOMBRE] = useState({ campo: '', valido: null });
  const [APELLIDO, cambiarAPELLIDO] = useState({ campo: '', valido: null });
  const [TELEFONO, cambiarTELEFONO] = useState({ campo: '', valido: null });
  const [terminos, cambiarTERMINOS] = useState(false);
  const [formulariovalido, cambiarformulariovalido] = useState(null);
  const [mostrarCarga, setMostrarCarga] = useState(false);
  const [RegistroOk, setRegistroOk] = useState(false);

  const history = useNavigate(); // Obtiene la instancia de history

  const createCount = () => {
    createUser(EMAIL.campo, PASSWORD.campo, NOMBRE.campo, APELLIDO.campo, cambiarformulariovalido, setMostrarCarga, (registroOk) => {
      setRegistroOk(registroOk);

      if (registroOk) {
        setTimeout(() => {
          history('/login');
        }, 3000); 
      }
    });
  }

  const onChangeTerminos = (e) => {
    cambiarTERMINOS(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (EMAIL.valido === 'true' && PASSWORD.valido === 'true' && NOMBRE.valido === 'true' && APELLIDO.valido === 'true' && TELEFONO.valido === 'true' && terminos) {
      cambiarEMAIL({ campo: '', valido: null });
      cambiarPASSWORD({ campo: '', valido: null });
      cambiarNOMBRE({ campo: '', valido: null });
      cambiarAPELLIDO({ campo: '', valido: null });
      cambiarTELEFONO({ campo: '', valido: null });

      // Mostrar animación de carga

      createCount();


    } else {
      cambiarformulariovalido(false);
    }
  }

  return (

    <form className='flex justify-center items-center h-screen' onSubmit={onSubmit}>

      {mostrarCarga && (
        <LoadingAnimation />
      )}

      <div className='h-[580px] w-[400px] bg-white rounded-2xl relative'>
        <Link to={"/"}>
          <img src="src/assets/imagenes/Logo-dev.png" alt="" className=" h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </Link>
        <div className='h-full flex flex-col pt-6 items-center'>
          <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">REGISTRATE</h1>

          <Input
            estado={EMAIL}
            cambiarEstado={cambiarEMAIL}
            tipo="email"
            icono={faEnvelope}
            label="E-MAIL"
            name="e-mail"
            leyendaError="Solo puede contener letras, numeros, puntos, guiones y guion bajo"
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={PASSWORD}
            cambiarEstado={cambiarPASSWORD}
            tipo="password"
            icono={faLock}
            label="PASSWORD"
            name="password"
            leyendaError="Tiene que ser de 4 a 12 dígitos"
            expresionRegular={expresiones.password}
          />
          <Input
            estado={NOMBRE}
            cambiarEstado={cambiarNOMBRE}
            tipo="text"
            icono={faUser}
            label="NOMBRE"
            name="nombre"
            leyendaError="Tiene que ser de 4 a 16 dígitos y solo puede contener letras"
            expresionRegular={expresiones.nombre}
          />

          <Input
            estado={APELLIDO}
            cambiarEstado={cambiarAPELLIDO}
            tipo="text"
            icono={faUser}
            label="APELLIDO"
            name="apellido"
            leyendaError="Tiene que ser de 4 a 16 dígitos y solo puede contener letras"
            expresionRegular={expresiones.apellido}
          />
          <Input
            estado={TELEFONO}
            cambiarEstado={cambiarTELEFONO}
            tipo="text"
            icono={faPhone}
            label="TELEFONO"
            name="telefono"
            leyendaError="Solo puede contener numeros y el maximo son 14 dígitos "
            expresionRegular={expresiones.telefono}
          />




          <div className='mt-6 mb-2 relative font-darker-grotesque text-[16px] right-8'>
            <input type="checkbox" className='cursor-pointer' checked={terminos} onChange={onChangeTerminos} />   He leido y acepto las <a href="./Politica y Privacidad Dev-Soft.pdf" target="_blank"><b>politicas de privacidad</b></a>
          </div>


          {formulariovalido === false && <div className='pt-1 bg-red-400 h-[30px] w-[350px] rounded-[3px] '>
            <p className='text-[14px]'>
              <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
              <b className='ml-2'>Error:</b> Porfavor rellene los campos correctamente.
            </p>
          </div>}

          <div className='flex items-center flex-col font-darker-grotesque mt-2'>
            <input type="submit" value="CREAR CUENTA" className='py-1  w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
          </div>

          {formulariovalido && <p className='text-[13px] text-green-600 '>Su cuenta se ha creado correctamente!</p>}
        </div>
      </div>


    </form>


  )
}