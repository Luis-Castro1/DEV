import React from 'react'
import CategoriasNav from '../componentes/CategoriasNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


export const Products = ({ products }) => {



  return (
    <>

      <CategoriasNav />

      <div className='sm:grid flex flex-wrap  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-5'>

        {products.map((product) => (

          <div className='max-w-[370px] mx-auto'>
            <div key={product.id} className=" bg-white  shadow-sm shadow-slate-950 relative overflow-hidden rounded-[20px] cursor-pointer font-darker-grotesque font-normal py-[1px] mx-2 my-5 grid justify-center gap-y-1">
              
              <div className="flex justify-center overflow-hidden bg-white">
              <img className='w-[370px] h-[370px]  rounded-[20px] hover:scale-125 transition-all duration-300 ' src={product.img} alt="" />
              </div>

              <div className="items-center text-white flex justify-between absolute inset-0 top-[325px] h-[3rem] bg-black/80  px-[2px] ">
                <strong>{product.name}</strong>
            
              
                <h3>{product.category}</h3>
              </div>

              <div className='flex justify-center'>
                <button className='w-full bg-white rounded-[2px]'>Agregar al carro  
                <FontAwesomeIcon icon={faCartPlus} /></button>
               
              </div>
            </div>
          </div>
        ))}

      </div>

      
    </>
  )
}

export default Products