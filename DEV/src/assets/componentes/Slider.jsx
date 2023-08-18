import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons"
import sliderimg from "../data/sliderimg"
import  { useState } from "react"


export const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliderimg.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)

    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === sliderimg.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };




    return (
        <div className="max-w-[1800px] h-[500px] sm:h-[700px] md:h-[900px] w-full m-auto py-2 my-8 px-5 relative"> {/*Contenedor principal */}

            <h2 className="py-3 font-darker-grotesque text-[23px] font-light no-underline text-center text-black">Tendencias</h2>


            <div style={{ backgroundImage: `url(${sliderimg[currentIndex].url})` }} className="w-full h-[88%] rounded-2xl bg-center bg-cover duration-300 group">

                {/* Left controller */}

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">

                    <FontAwesomeIcon onClick={prevSlide} className="text-[50px]" icon={faChevronLeft}> </FontAwesomeIcon>

                </div>

                {/* Right controller */}

                <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
                    <FontAwesomeIcon onClick={nextSlide} className="text-[50px]" icon={faChevronRight}> </FontAwesomeIcon>
                </div>

            </div>

            {/* Indicadores */}

            <div className="flex top-4 justify-center py-2">

                {sliderimg.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-[18px] sm:text-[15px] mx-1 cursor-pointer text-black/50'
                    >
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                ))}

            </div>

        </div>
    )
}
