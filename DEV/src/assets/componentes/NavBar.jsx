import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faHeart, faCartShopping }
  from "@fortawesome/free-solid-svg-icons"

const classLi = "list-none text-neutral-900 font-normal rounded-md px-1 py-1 text-md sm:text-[15px]"
const linkHover = "hover:scale-125 cursor-pointer transtition-all duration-200"


export const NavBar = () => {
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 justify-between py-1">

      <div className="flex justify-center md:hidden w-full py-2 my-1">
        <div className="mt-4 mb-2 pt-1">
          <img src="/src/assets/imagenes/Logo-dev.png" alt="Logo" className="w-[210px] hover:scale-105 cursor-pointer transition-all duration-300" />
        </div>
      </div>




      <div className=" flex justify-center md:block px-3 w-full">
        <div className="flex ml-2 py-1 my-2 items-center relative">
          <FontAwesomeIcon className="absolute pt-[10px] pr-0 pb-[10px] sm:ml-0 ml-[10px] sm:pl-[13px] z-[100] text-[20px]" icon={faMagnifyingGlass} style={{ color: "#0F172A", }} />

          <input className="ml-[5px]  pl-[30px] sm:ml-0 sm:pl-[40px] text-[16px] sm:w-[90%] md:w-[75%] border-b-[1px] border-stone-900 bg-transparent focus:outline-none focus:border-sky-800 w-[95%]" type="search" placeholder="Buscar productos" id="search-text " />

        </div>
      </div>



      <div className="hidden md:flex md:justify-center  w-full">
        <div className="mt-4 mb-2 pt-1">
          <img src="/src/assets/imagenes/Logo-dev.png" alt="Logo" className="w-[210px] hover:scale-105 cursor-pointer transition-all duration-300" />
        </div>
      </div>



      <div className="grid grid-cols-3 justify-center items-start my-2 py-1">

        <div className='justify-center flex'>
          <a className={linkHover} href="#">
            <li className={classLi}>Cuenta <FontAwesomeIcon icon={faUser} style={{ color: "black", }} />
            </li>
          </a>
        </div>

        <div className='justify-center flex'>
          <a className={linkHover} href="#">
            <li className={classLi}>Favoritos <FontAwesomeIcon icon={faHeart} style={{ color: "black", }} />
            </li>
          </a>
        </div>

        <div className='justify-center flex'>
          <a className={linkHover} href="#">
            <li className={classLi} >Carrito <FontAwesomeIcon icon={faCartShopping} style={{ color: "black", }} />

            </li>
          </a>


        </div>


      </div>

    </div >
  )
}
