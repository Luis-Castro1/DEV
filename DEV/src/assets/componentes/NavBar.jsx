import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export const NavBar = () => {
  return (
    <nav className="bg-slate-700 flex justify-between items-center">

        <div className="flex">
        <FontAwesomeIcon icon={faUser} style={{color: "#85a3d5",}} /> 
        </div>

        <div className="">
            <img src="../imagenes/Logo-dev.png" alt="Logo Dev" />
        </div>


        <div className="flex justify-between items-center">
            <a className=" text-white rounded-md px-3 py-2 text-sm font-medium" href="#">Cuenta</a> <FontAwesomeIcon icon={faUser} style={{color: "#ededed",}} />
            <a className="text-white rounded-md px-3 py-2 text-sm font-medium" href="#">Favoritos</a> <FontAwesomeIcon icon={faHeart} style={{color: "#ededed",}} />
            <a className="text-white rounded-md px-3 py-2 text-sm font-medium" href="#">Carrito</a> <FontAwesomeIcon icon={faCartShopping} style={{color: "#ededed",}} />
        </div>
    </nav>
  )
}
