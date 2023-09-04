import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Label,LeyendaError,IconoValidacion, } from '../elementos/Formularios';
export const Input = ({ estado, cambiarEstado, tipo, icono, label, name, leyendaError, expresionRegular }) => {
  const onchange = (e) =>{
cambiarEstado({...estado, campo: e.target.value});
  }

  const validacion = () =>{
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido: 'true'});
      }else{
        cambiarEstado({...estado, valido: 'false'});
      }

    }
  }

  return (
    <div>
      <form className="h-full flex flex-col pt-6 items-center">

        <div>
          <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={icono} className='absolute left-[-20px] leading-[30px]' />
            <input type={tipo} id={name} value={estado.campo} onChange={onchange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />
            <IconoValidacion icon={faCheck} className='absolute right-0 opacity-0' />
            <Label htmlFor={name} id={name} valido={estado.valido} className='absolute left-0 text-gray-400 text-[13px] transition-all duration-300  pointer-events-none peer-focus:-top-6'>{label}</Label>
          </div>
          <LeyendaError className='font-sans text-[11px] mb-0 text-red-500 hidden'>{leyendaError}</LeyendaError>
        </div>




      </form>

    </div>

  )
}
