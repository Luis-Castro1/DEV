import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <footer>
            <section>

                <div className="flex flex-wrap justify-center gap-x-16 sm:gap-x-0 sm:grid sm:grid-cols-3 sm:place-items-center mt-16 sm:w-full sm:h-[200px]">

                    <div className=" h-[90%] py-2 my-5 flex-col space-y-1">

                        <h3 className='my-4 sm:my-2 sm:text-center text-black font-semibold text-[18px] sm:text-[15px]'>Ayuda</h3>

                        <p className='text-black text-[16px] sm:text-[15px]'>Envío</p>

                        <p className='text-black text-[16px] sm:text-[15px]'>Garantia</p>

                        <p className='text-black text-[16px] sm:text-[15px]'>Preguntas Frecuentes</p>

                    </div>

                    <div className=" h-[90%] py-2 my-5 sm:my-2 flex-col space-y-1">

                        <h3 className='my-3 text-center text-black font-semibold text-[18px] sm:text-[15px]'>Contactanos</h3>

                        <div className="flex">

                            <div className=" flex items-center h-[40px] pb-[15px]">
                                <FontAwesomeIcon className='text-[30px]' icon={faWhatsapp} />
                            </div>

                            <div className="">
                                <p className='text-black text-[16px] sm:text-[15px] px-3'>307 674 56 34</p>
                            </div>

                        </div>


                    </div>

                    <div className="h-[90%] w-screen sm:w-auto my-6 sm:py-2 sm:my-4 flex-col space-y-1">

                        <h3 className='text-[18px] my-3 text-center text-black font-semibold sm:text-[15px]'>Redes</h3>

                        <div className='flex justify-center sm:justify-between gap-[50px] text-[25px] '>
                            <FontAwesomeIcon className='hover:text-[#1DA1F2]' icon={faTwitter} />
                            <FontAwesomeIcon className='hover:text-[#0078F7]' icon={faFacebook} />
                            <FontAwesomeIcon className='hover:text-[#E1306C] hover:scale-150' icon={faInstagram} />
                        </div>

                    </div>

                </div>


            </section>
        </footer>
    )
}
