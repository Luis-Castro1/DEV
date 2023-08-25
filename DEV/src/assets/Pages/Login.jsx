import './login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
export const Login = () => {



  return (

    <div className='flex justify-center items-center h-screen'>
      <div className='h-[400px] w-[400px] bg-white rounded-2xl relative'>
        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="w-45 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <form className='h-full flex flex-col pt-6 items-center'>
            <h1 className=" mt-9 text-[1.5rem] font-darker-grotesque text-black bg">ACCEDE A TU CUENTA </h1>
       
          <input type="text" />
        </form>
      </div>


    </div>


  )
}
