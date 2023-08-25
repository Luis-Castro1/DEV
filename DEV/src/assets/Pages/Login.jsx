import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
export const Login = () => {


  
  return (
    <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-400 bg-white rounder-10'>
     <form action="" className='px-20 box-border'>
<img src="src/assets/imagenes/Logo-dev.png" alt="" className='"w-90 h-12 block mx-auto -my-6' />
<h1 className='text-center pb-20 font-Darker-Grotesque text-1.5rem text-black mt-11'>ACCEDE A TU CUENTA </h1>

<div className='E-MAIL'>
  <div className='relative border-b-1.5 border-black '>
  <FontAwesomeIcon className='absolute left-negative-20 leading-30' icon={faEnvelope} />
<input className='mb-10 w-full px-5 h-25 text-14 border-none bg-none outline-none' type="text" />
  </div>
</div>

<div className='PASSWORD'>
<FontAwesomeIcon icon={faKey} />
<input type="password" />
</div>

     </form>
     </div>
    

  )
}
