import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faUser, faHeart, faCartShopping, faBars }
  from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {
  return (
    <div className="grid md:grid-cols-3  grid-cols-1 justify-between">

      <div className=" md:block px-3 w-full">
        <div className="flex ml-2 pt-2 items-center relative">
          <FontAwesomeIcon className="absolute pt-[10px] pr-0 pb-[10px] sm:ml-0 ml-[45px] sm:pl-[13px] z-[100] text-[20px]" icon={faMagnifyingGlass} style={{ color: "#0F172A", }} />

          <input className="ml-[40px] pl-[30px] sm:ml-0 sm:pl-[40px] text-[16px] w-[75%] border-b-[1px] border-stone-900 bg-transparent focus:outline-none focus:border-sky-800" type="search" placeholder="Buscar productos" id="search-text" />

        </div>
      </div>



      <div className="bg-amber-500 justify-center flex w-full">
        <div className="mt-4 mb-2 pt-1">
          <img src="/src/assets/imagenes/Logo-dev.png" alt="Logo" className="w-[200px]" />
        </div>
      </div>



      <div className="flex justify-between items-center bg-green-600">

        <ul className='hidden  sm:flex text-[18px]
      sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'>

          <li>
            <a className="  text-white rounded-md px-2 py-2 text-sm font-medium" href="#">Cuenta</a> <FontAwesomeIcon icon={faUser} style={{ color: "#ededed", }} />
          </li>

          <li>
            <a className=" text-white rounded-md px-2 py-2 text-sm font-medium" href="#">Favoritos</a> <FontAwesomeIcon icon={faHeart} style={{ color: "#ededed", }} />
          </li>

          <li>
            <a className=" text-white rounded-md px-2 py-2 text-sm font-medium" href="#">Carrito</a> <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ededed", }} />
          </li>
        </ul>

        <div className='w-10 h-4 cursor-pointer sm:hidden'>
          <FontAwesomeIcon icon={faBars} style={{ color: "#0f172a", fontSize: 16 }} />
        </div>

      </div>
    </div>
  )
}
