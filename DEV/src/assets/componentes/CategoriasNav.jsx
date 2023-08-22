import { Link } from "react-router-dom"

export const CategoriasNav = () => {
  return (
    <div>
        <div className="flex mt-[20px] py-[1px] font-darker-grotesque text-[17px] gap-7 justify-center bg-black text-white">
            <Link to="/Categoria-Hombre/">HOMBRE</Link>
            <Link to="/Categoria-Mujer/">MUJER</Link>
            <Link to="/Categoria-Niño/">NIÑO</Link>
        </div>
    </div>
  )
}

export default CategoriasNav