import categorias from '../data/categorias'
import CategoriasNav from '../componentes/CategoriasNav'
import Footer from '../componentes/Footer'
import { Link, Outlet, useParams} from 'react-router-dom'

export const CategoryMan = () => {


  return (
    <>

      <CategoriasNav />

      <div className='flex justify-center items-center py-[10px]'>
        <h1 className='text-[18px] font-darker-grotesque ' >CATEGORIAS</h1>
      </div>

      <div className="max-w-[1980px] justify-center flex flex-wrap text-white">
        {categorias.map((category) => (
          <Link key={category.id} to={`/Categoria-Hombre/${category.path}`} className="cursor-pointer">

            <h1 className="sm:hidden my-5 font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{category.name}</h1>

            <div className="flex justify-center overflow-hidden ">
              <img className=" ms-0  hover:scale-105 sm:hover:scale-125 transition-all duration-500 rounded-[15px] w-[330px] h-[330px] sm:rounded-none sm:w-[330px] sm:h-[330px]  max-w-[100%] max-h-[490px]" src={category.image}
                alt={category.alt} />
            </div>

            <h1 className="hidden sm:block font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-1 sm:mb-3">{category.name}</h1>
          </Link>



        ))}

       
      </div>
      
     
      

      <Footer />
    </>
    
  )
}
