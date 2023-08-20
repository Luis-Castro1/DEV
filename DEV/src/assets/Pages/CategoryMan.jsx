import categorias from '../data/categorias'
import CategoriasNav from '../componentes/CategoriasNav'
import { Link } from 'react-router-dom'

export const CategoryMan = () => {
  return (
    <>
      <CategoriasNav />
      <div className='flex justify-center items-center py-[10px]'>
        <h1 className='text-[18px] font-darker-grotesque' >CATEGORIAS</h1>
      </div>
      <div className="max-w-[1980px] justify-center flex flex-wrap text-white">
        {categorias.map((category) => (
          <Link key={category.id} to={category.path} className="cursor-pointer">
            <div className="flex justify-center overflow-hidden">
              <img className="ms-0  hover:scale-105 sm:hover:scale-110 transition-all duration-200 rounded-[15px] w-[330px] h-[330px] sm:rounded-none sm:w-[330px] sm:h-[330px]  max-w-[100%] max-h-[490px]" src={category.image}
                alt="" />
            </div>
            <h1 className=" font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">{category.name}</h1>
          </Link>
        ))}


      </div>
    </>
  )
}
