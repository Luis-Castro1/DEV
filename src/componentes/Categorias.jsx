import { Link } from "react-router-dom"
export const Categorias = (props) => {
    return (
        <>
            <Link className="cursor-pointer mx-5" to={props.to}>
                <h1 className="font-darker-grotesque text-[23px] font-bold no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">{props.title}</h1>

                <div className="flex justify-center  overflow-hidden rounded-[15px]">
                    <img className=" ms-0 rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[80%] h-[340px] sm:w-[60%] sm:h-[350px] lg:w-[100%] md:h-[490px]  max-h-[490px]" src={props.image}
                     alt={props.alt} />
                </div>
            </Link>
        </>

    )
}
