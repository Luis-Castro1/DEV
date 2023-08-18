
import { Link } from "react-router-dom"

export const Categorias = () => {
    return (
        <div className="max-w-[1980px] grid md:grid-cols-3  grid-cols-1 justify-between mt-9 pb-3 pt-5 text-white">

           
                <Link className="cursor-pointer" to="/Categoria-Hombre">
                    <h1 className="font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">HOMBRE</h1>

                    <div className="flex justify-center  overflow-hidden">
                        <img className="ms-0 rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[90%] h-[440px] sm:w-[90%] sm:h-[480px] md:w-[90%] md:h-[490px] max-w-[95%] max-h-[490px]" src="src\assets\imagenes\Hombre.png"
                            width="50%" alt="" />
                    </div>
                </Link>

                <Link className="cursor-pointer" to="/Categoria-Mujer">
                    <h1 className="font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">MUJER</h1>

                    <div className="flex justify-center  overflow-hidden">
                        <img className="ms-0 rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[90%] h-[440px] sm:w-[90%] sm:h-[480px] md:w-[90%] md:h-[490px] max-w-[95%] max-h-[490px]" src="src\assets\imagenes\Mujer.png"
                            width="50%" alt="" />
                    </div>
                </Link>
                <Link className="cursor-pointer" to="/Categoria-Niño">
                    <h1 className="font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">NIÑO</h1>

                    <div className="flex justify-center  overflow-hidden">
                        <img className="ms-0 rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[90%] h-[440px] sm:w-[90%] sm:h-[480px] md:w-[90%] md:h-[490px] max-w-[95%] max-h-[490px]" src="src\assets\imagenes\Niño.png"
                            width="50%" alt="" />
                    </div>
                </Link>
        


           

        </div>
    )
}
