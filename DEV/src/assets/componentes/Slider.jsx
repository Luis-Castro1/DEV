import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft as Left, faChevronRight as Right, faCircle } from "@fortawesome/free-solid-svg-icons"
import sliderimg from "../data/sliderimg"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { useRef } from "react"



export const Slider = () => {

    const nextSlide = () => {

        //Se comprueba que el Contenedor del Slider tenga elementos
        if (containerSlide.current.children.length > 0) {


            //Obtenemos el primer elemento del contenedor
            const firstSlide = containerSlide.current.children[0];

            containerSlide.current.style.transition = `800ms ease-out all`;

            const slideSize = containerSlide.current.children[0].offsetWidth;

            console.log(slideSize)
            containerSlide.current.style.transform = `translateX(-${slideSize}px)`;

            const transition = () => {
                // Reiniciamos la posicion del Slideshow.
                containerSlide.current.style.transition = 'none';
                containerSlide.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                containerSlide.current.appendChild(firstSlide);

                containerSlide.current.removeEventListener('transitionend', transition);
            }


            // Eventlistener para cuando termina la animacion.
            containerSlide.current.addEventListener('transitionend', transition);
        }

    }
    const prevSlide = () => {

        if (containerSlide.current.children.length > 0) {
            //Obtenemos el último elemento

            const index = containerSlide.current.children.length - 1;

            const lastSlide = containerSlide.current.children[index];

            containerSlide.current.insertBefore(lastSlide, containerSlide.current.firstChild);

            containerSlide.current.style.transition = 'none';
            const slideSize = containerSlide.current.children[0].offsetWidth;
            containerSlide.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                containerSlide.current.style.transition = "800ms ease-out all";
                containerSlide.current.style.transform = `translateX(0)`;
            }, 30);

        }

    }

    const styleBottom = "pointer-events-auto bg-none border-none cursor-pointer outline-none w-[50px] sm:w-[80px] h-full text-center absolute ease-in-out duration-300 group-hover:text-white group-hover:scale-110"

    const containerSlide = useRef(null);

    return (
        <div className="relative group  my-[2rem] ">

            <div className="text-center py-[1rem]">
                <h3 className='font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3' >TENDENCIAS</h3>
            </div>

            <div ref={containerSlide} className="flex flex-nowrap ">


                <div className="slider min-w-full overflow-hidden z-10 relative bg-none ">
                    <Link to="/" >
                        <img className="w-full align-top" src="src\assets\imagenes\slider1.jpg" alt="" />
                    </Link>
                    <div className="bg-black/95 text-white relative md:absolut w-full py-[10px] px-[60px] bottom-0 text-center">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="slider min-w-full overflow-hidden z-10 relative">
                    <Link to="/" >
                        <img className="w-full align-top" src="src\assets\imagenes\slider2.jpg" alt="" />
                    </Link>
                    <div className="bg-black/95 text-white relative md:absolut w-full py-[10px] px-[60px] bottom-0 text-center">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="slider min-w-full overflow-hidden z-10 relative">
                    <Link to="/" >
                        <img className="w-full align-top" src="src\assets\imagenes\slider3.jpg" alt="" />
                    </Link>
                    <div className="bg-black/95 text-white relative md:absolut w-full py-[10px] px-[60px] bottom-0 text-center">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>



            </div>

            <div className="Controles absolute top-0 z-20 w-full  h-full  pointer-events-none">

                <button onClick={prevSlide} className={`${styleBottom} left-0 sm:left-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[60px]" icon={Left}> </FontAwesomeIcon>
                </button>

                <button onClick={nextSlide} className={`${styleBottom} right-0 sm:right-1`}>
                    <FontAwesomeIcon className="text-[40px] sm:text-[60px]" icon={Right}> </FontAwesomeIcon>
                </button>

            </div>

        </div >
    )
}
