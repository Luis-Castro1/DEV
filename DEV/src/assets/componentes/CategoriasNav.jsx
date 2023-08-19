import { Link } from "react-router-dom"

const CategoriasNav = () => {
  return (
    <div>
        <div className="flex my-[30px] font-darker-grotesque text-[18px] gap-7 justify-center bg-black text-white">
            <Link>HOMBRE</Link>
            <Link>MUJER</Link>
            <Link>NIÑO</Link>
        </div>
    </div>
  )
}

export default CategoriasNav