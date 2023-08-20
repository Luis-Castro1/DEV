import { Link } from "react-router-dom"

const CategoriasNav = () => {
  return (
    <div>
        <div className="flex mt-[20px] py-[1px] font-darker-grotesque text-[17px] gap-7 justify-center bg-black text-white">
            <Link>HOMBRE</Link>
            <Link>MUJER</Link>
            <Link>NIÑO</Link>
        </div>
    </div>
  )
}

export default CategoriasNav