import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft as Left, faChevronRight as Right, faCircle } from "@fortawesome/free-solid-svg-icons"
import sliderimg from "../data/sliderimg"
import { useState } from "react"
import { Link } from 'react-router-dom'



export const Slider = () => {

    const styleBottom = "pointer-events-all bg-white/50 border-none cursor-pointer outline-none w-[50px] h-full text-center absolute ease-in-out duration-300"
    


    return (
        <div className="Contenedor padre relative overflow-hidden max-w-[1480px] mx-[20px] my-auto">

            <div className="container-slide flex flex-nowrap ">

                <div className="slider md:relative min-w-full overflow-hidden ease-in-out duration-300 z-10 max-h-[800px]">

                    <Link to="/" >
                        <img className="w-full align-top " src="src/assets/imagenes/Slider1.jpg" alt="" />
                    </Link>

                    <div className="relative bg-black md:absolute md:bottom-[4rem] min-[870px]:bottom-[4rem] lg:bottom-12 min-[1170px]:bottom-[1rem] md:bg-black/50 text-white w-full py-[10px] px-[60px] text-center">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
                <div className="slider relative min-w-full overflow-hidden ease-in-out duration-300 z-10 max-h-[900px]">

                    <Link to="/" >
                        <img className="w-full align-top " src="src/assets/imagenes/Slider2.jpg" alt="" />
                    </Link>

                    <div className="bg-black/50 text-white w-full py-[10px] px-[60px] text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quae officiis, at et deserunt aperiam?</p>
                    </div>

                </div>
                <div className="slider relative min-w-full overflow-hidden ease-in-out duration-300 z-10 max-h-[900px]">

                    <Link to="/" >
                        <img className="w-full align-top " src="src/assets/imagenes/Slider3.jpg" alt="" />
                    </Link>

                    <div className="bg-black/50 text-white w-full py-[10px] px-[60px] text-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quae officiis, at et deserunt aperiam?</p>
                    </div>

                </div>




            </div>

            <div className="Controles absolute top-0 z-20 w-full h-full pointer-events-none">

                <button  className={`${styleBottom} left-0`}>
                    <FontAwesomeIcon className="text-[50px] left-0" icon={Left}> </FontAwesomeIcon>
                </button>
                <button className={`${styleBottom} right-0`}>
                    <FontAwesomeIcon className="text-[50px]" icon={Right}> </FontAwesomeIcon>
                </button>

            </div>

        </div >
    )
}
