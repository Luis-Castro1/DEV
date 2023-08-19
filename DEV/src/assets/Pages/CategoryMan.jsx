import categorias from '../data/categorias'
import CategoriasNav from '../componentes/CategoriasNav'
import { Link } from 'react-router-dom'

export const CategoryMan = () => {
  return (
    <>
      <CategoriasNav />
      <div className="max-w-[1980px] justify-center flex flex-wrap text-white">

        {categorias.map((category) => (
          <Link key={category.id} to={category.path} className="cursor-pointer">
            <h1 className="font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">{category.name}</h1>

            <div className="flex justify-center overflow-hidden">
              <img className="ms-0  hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[230px] h-[230px] sm:w-[330px] sm:h-[330px] md:w-[430px] md:h-[430px] max-w-[100%] max-h-[490px]" src={category.image}
                alt="" />
            </div>
          </Link>
        ))}


      </div>
    </>
  )
}
