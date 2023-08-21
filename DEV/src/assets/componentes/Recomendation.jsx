import React from 'react'
import { recomendation } from '../data/recomendation.json'

export const Recomendation = () => {
    return (
        <>

            <div className='w-full'>
                <p p className="font-darker-grotesque font-normal text-3xl mx-3 my-2">Recomendados para ti </p>
            </div>

            {recomendation.map((p) => (


                <div className="relative overflow-hidden rounded-[20px] cursor-pointer font-darker-grotesque font-normal">
                    <div className=' flex justify-center overflow-hidden'>
                        <img className=" w-[310px] h-[370px] mt-[15px] rounded-[20px] hover:scale-110 transition-all duration-500 " src={p.img} alt={p.title} />
                    </div>

                    <div className="items-center text-white flex justify-between absolute inset-0 top-[21rem] h-[3rem] bg-black/80  px-[2px]  ">
                        <p className='mx-2'>{p.title}</p>
                        <p className='mx-2'> ${p.price}</p>
                    </div>

                </div>

            ))}


        </>
    )
}
