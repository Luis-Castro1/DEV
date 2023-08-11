import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const Slider = () => {
    return (

        
        <div className="relative  bg-orange-800 "><h1 className="text-center bg-black text-white my-2">Tendencias</h1> {/*Contenedor Principal*/}
        
            <div className="flex flex-nowrap "> {/*Contenedor Slide*/}
                <div className="min-w-full overflow-hidden ease-in-out duration-300 z-10  relative max-h-[500px]">  {/*Slide*/}
                    <a  href="#">
                    <img className="w-full align-top" src="src/assets/imagenes/Hombre.png" alt=""  />
                    </a>
                    <div className="relative bg-black sm:opacity-50 text-white w-full py-[10px] px-[60px] text-center sm:absolute bottom-0">
                        <p>
                            15% descuento en productos X
                        </p>
                    </div>
                </div>
                <div className="min-w-full">  {/*Slide*/}
                    <a href="#">
                        <img className="w-full h-12" src="src/assets/imagenes/Hombre.png" alt=""  />
                    </a>
                    <div>
                        <p>
                            15% descuento en productos X
                        </p>
                    </div>
                </div>
            </div>

            {/* Controles */}
            <div className="absolute top-0 z-20 w-full h-full pointer-events-none">
                <button className="pointer-events-auto">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button >

                <button className="pointer-events-auto bg-none border-none cursor-pointer outline-none w-[50px] h[50px] text-center absolute ease-in-out duration-300">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

            </div>
        </div>
    )
}
