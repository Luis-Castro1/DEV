import {categorias} from '../data/categorias'

export const CategoryMan = () => {
  return (
    <div>
      
    {categorias.map((category) =>{
      <div>
        <h1>{category.name}</h1>
      </div>
    })}

    </div>
  )
}
