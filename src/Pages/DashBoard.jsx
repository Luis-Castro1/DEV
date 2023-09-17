import { useAuth } from "../context/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../componentes/cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloud, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { CategoriasNav } from '../componentes/CategoriasNav'
import { Footer } from '../componentes/Footer'


export const DashBoard = () => {

  const { logout, user } = useAuth();
  const navigation = useNavigate();
  const [showMenu, setShowMenu] = useState(false)

  const userLogout = () => {
    logout();
    navigation('/')
  }



  return (
    <>

      <div className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-5">
        <img className=" text-white w-[10%] rounded-sm "
          src="src\assets\imagenes\Logo-dev.png" />
      </div>

      <div className="hidden sm:block sm:w-full">
        <CategoriasNav />
      </div>

      <div className="flex flex-col h-full sm:grid-flow-col sm:grid sm:py-20 sm:px-10 sm:gap-10">

        <div className="sm:hidden flex flex-col justify-center items-center mt-5">
          <img className=" text-white w-[30%] rounded-sm "
            src="src\assets\imagenes\Logo-dev.png" />
        </div>

        <div className="sm:hidden block w-full">
          <CategoriasNav />
        </div>

        <aside className={`bg-white h-full w-full z-[500] fixed block left-0  ease-in duration-300 sm:-translate-x-0 sm:bg-transparent sm:border-black/20 sm:rounded sm:border sm:col-span-1 sm:relative sm:z-auto sm:mx-0  sm:my-5 sm:gap-y-8   ${showMenu ? '-translate-x-0' : '-translate-x-full'}`}>

          <div className="absolute sm:hidden right-2 top-1 text-[20px]">
            <button onClick={() => setShowMenu(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className=" h-[90%] ">

            <div className="flex justify-center bg-black text-white text-[30px] items-center mt-10 sm:mt-0">
              <strong className="font-darker-grotesque font-[800] uppercase">Hola {user.name}!</strong>
            </div>

            <div className="h-full flex flex-col z-[500]">

              <div className="flex justify-center items-center h-1/5  ">
                <Link to='/'>
                  <strong>
                    Inicio
                  </strong>
                </Link>
              </div>

              <div className="flex justify-center items-center h-1/5">
                <NavLink
                  to={'/perfil'}
                  className={({ isActive }) => {
                    return (
                      'flex items-center justify-center w-[80%] text-black' + (isActive
                        ? ' scale-125 bg-[#d0cece] min-h-[30%]'
                        : 'font-[600]')
                    );
                  }}>

                  <strong>
                    Perfil
                  </strong>

                </NavLink>
              </div>

              <div className="flex justify-center items-center h-1/5  ">
                <strong>
                  <button onClick={userLogout}>
                    cerrar sesión
                  </button>
                </strong>
              </div>

              <div className="h-[60%] flex text-[200px] items-center justify-center">
                <FontAwesomeIcon className="text-black/5" icon={faCloud} />
              </div>

            </div>

          </div>

        </aside>

        <div className="sm:col-span-6 sm:w-full h-full flex flex-wrap justify-center mx-2 my-5 sm:my-3 gap-y-8">

          <div className="flex items-center w-full uppercase font-clear-sans italic font-[500]">
            <button onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon className="sm:hidden text-[25px]" icon={faBars} />
            </button>
            <h1 className="text-[30px] mx-4">Perfil</h1>
          </div>

          <div className="w-full border-black/30 border-[1.5px] grid grid-cols-1 gap-y-10  gap-x-6 px-2 py-2 rounded-md">

            <div className="grid grid-cols-2">

              <div className="space-y-2">
                <p className="font-darker-grotesque font-[800] text-[20px]">Nombre</p>
                <p>{user.name}</p>
              </div>

              <div className="space-y-2">
                <p className="font-darker-grotesque font-[800] text-[20px]">Apellido</p>
                <p></p>
              </div>

            </div>

            <div className="w-full flex-col space-y-2">
              <p className="font-darker-grotesque font-[800] text-[20px]">Correo</p>
              <p>{user.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-8 ">

              <div className="space-y-2">
                <p className="font-darker-grotesque font-[800] text-[20px]">Telefono</p>
                <p>000000</p>
              </div>

              <div className="space-y-2">
                <p className="font-darker-grotesque font-[800] text-[20px]">N. Documento</p>
                <p>145454</p>
              </div>

            </div>

            <div className="w-full flex justify-end">
              <button className="w-full h-full bg-black text-white rounded-md">
                Editar Información
              </button>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}
