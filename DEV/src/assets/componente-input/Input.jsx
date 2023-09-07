import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { Label, LeyendaError, IconoValidacion, } from '../elementos/Formularios';


export const Input = ({ estado, cambiarEstado, tipo, icono, label, name, leyendaError, expresionRegular }) => {
 const onchange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  }

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: 'true' });
      } else {
        cambiarEstado({ ...estado, valido: 'false' });
      }

    }
  }

  return (
    <div>
      <div className="h-full flex flex-col pt-6 items-center">

        <div>
          <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={icono} className='absolute left-[-20px] leading-[30px]' />
            <input type={tipo} id={name} value={estado.campo} onChange={onchange} onKeyUp={validacion} onBlur={validacion} valido={estado.valido} className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />
            <IconoValidacion icon={estado.valido === 'true' ? faCheck : faX} className='absolute right-0 opacity-0' valido={estado.valido} />
            <Label htmlFor={name} id={name} valido={estado.valido} className='absolute left-0 text-gray-400 text-[13px] transition-all duration-500 pointer-events-none peer-focus:-translate-y-5'>{label}</Label>
          </div>
          <div className=''>
            <LeyendaError className='absolute left-[35px] font-sans text-[11px] mb-0 text-red-500 hidden' valido={estado.valido}>{leyendaError}</LeyendaError>

          </div>
        </div>





      </div>

    </div>

  )
}
