import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'

export const Input = () => {
    return (
       <div>
        <form className="h-full flex flex-col pt-6 items-center">
        <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">REGISTRATE</h1>
          <div>
            <div className=' mt-20 relative font-sans left-[-10px]'>
            <FontAwesomeIcon icon={faEnvelope} className='absolute left-[-20px] leading-[30px]' />
            <input type="text" id="email_input" className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />
            <label htmlFor="email" id='email_label' className='absolute left-0 text-gray-400 text-[13px] transition-all duration-300  pointer-events-none peer-focus:-top-6'>E-MAIL</label>
          </div>
        </div>
          
          
        
          <div className='mt-5 relative font-darker-grotesque text-[16px] right-8'>
            <input type="checkbox" className='cursor-pointer '/>   He leido y acepto las <a href="..//Pages/Politica y Privacidad Dev-Soft.pdf" target="_blank"><b>politicas de privacidad</b></a>
          </div>

          <div className='flex items-center flex-col pt-5 font-darker-grotesque  '>
            <input type="button" value="CREAR CUENTA" className='py-1 pb-1 block mb-2 w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
        </div>
        </form>
     
       </div>

    )
}
