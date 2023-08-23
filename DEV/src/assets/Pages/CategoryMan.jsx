import CategoriasNav from '../componentes/CategoriasNav'
import Footer from '../componentes/Footer'
import { Link} from 'react-router-dom'
import { Recomendation } from '../componentes/Recomendation'

export const CategoryMan = ({ listProducts }) => {


  return (
    <>

      <CategoriasNav />

      <div className='flex justify-center items-center py-[10px]'>
        <h1 className='text-[18px] font-darker-grotesque ' >CATEGORIAS</h1>
      </div>

      <div className="max-w-[1980px] justify-center flex flex-wrap text-white mb-10">
        {listProducts.map((listProducts) => (
          <Link key={listProducts.id} to={`${listProducts.fatherPath}${listProducts.path}`} className="cursor-pointer">

            <h3 className="sm:hidden my-5 font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{listProducts.name}</h3>

            <div className="flex justify-center overflow-hidden ">
              <img className=" ms-0  hover:scale-105 sm:hover:scale-125 transition-all duration-500 rounded-[15px] w-[330px] h-[330px] sm:rounded-none sm:w-[330px] sm:h-[330px]  max-w-[100%] max-h-[490px]" src={listProducts.image}
                alt={listProducts.alt} />
            </div>

            <h3 className="hidden sm:block font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{listProducts.name}</h3>
          </Link>
        ))}

      </div>
      <hr className='h-[2px] bg-black mb-10' />

      <div className='max-w-[1980px] justify-center sm:justify-between mx-3 flex flex-wrap'>
        <Recomendation />
      </div>

      <Footer />
    </>

  )
}
