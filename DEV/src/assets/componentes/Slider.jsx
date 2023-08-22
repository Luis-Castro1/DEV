import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft as Left, faChevronRight as Right, faCircle } from "@fortawesome/free-solid-svg-icons"
import sliderimg from "../data/sliderimg"
import { useState } from "react"
import { Link } from 'react-router-dom'



export const Slider = () => {

    const containerP =  props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)';

    const styleBottom = "pointer-events-auto bg-none border-none cursor-pointer outline-none w-[50px] sm:w-[80px] h-full text-center absolute ease-in-out duration-300 hover:text-white hover:bg-black/20 "



    return (
        <div className="bg-red-600 relative">

            <div className="container-slide flex flex-nowrap ">

                <div className="slider min-w-full overflow-hidden z-10 relative">

                    <Link to="/" >
                        <img className="w-full align-top" src="src/assets/imagenes/Slider1.jpg" alt="" />
                    </Link>

                    <div colorFondo='#EC7437' colorTexto='#EBECF0' className="relative md:absolut w-full py-[10px] px-[60px] bottom-0 text-center" style={{background: `${}`}}>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>


            </div>

            <div className="Controles absolute top-0 z-20 w-full  h-full  pointer-events-none">

                <button className={`${styleBottom} left-0 sm:left-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[80px]" icon={Left}> </FontAwesomeIcon>
                </button>

                <button className={`${styleBottom} right-0 sm:right-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[80px]" icon={Right}> </FontAwesomeIcon>
                </button>

            </div>

        </div >
    )
}
