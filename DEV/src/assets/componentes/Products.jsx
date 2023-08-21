import React from 'react'
import CategoriasNav from '../componentes/CategoriasNav'

export const Products = ({ products }) => {



  return (
    <>

      <CategoriasNav />

      <div className='grid  grid-cols-5 mx-5'>

        {products.map((product) => (

          <div className='bg-white w-full'>
            <div key={product.id} className="bg-red-500 py-[8rem] mx-5 my-5 grid justify-center gap-y-3">
              <img src={product.img} alt="" />

              <div className="">
                <strong>{product.name}</strong>
              </div>
              <div className="">
                <h3>{product.category}</h3>
              </div>

              <div>
                <button>Agregar al carro</button>
              </div>
            </div>
          </div>
        )




        )}




      </div>
    </>
  )
}

export default Products