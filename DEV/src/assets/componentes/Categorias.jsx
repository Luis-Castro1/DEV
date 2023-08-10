import categorias from "../data/categorias"

export const Categorias = () => {
    return (
        <div className="grid md:grid-cols-3   grid-cols-1 justify-between mt-9 pt-5 text-white">

            {categorias.map((category) => (
                <a key={category.id} className="cursor-pointer" href="">
                    <h1 className="font-darker-grotesque text-[23px] font-light no-underline text-center text-black mb-1 sm:mt-3 sm:mb-3">{category.name}</h1>

                    <div className="flex justify-center  overflow-hidden">
                        <img className="rounded-[15px] hover:scale-105 sm:hover:scale-110 transition-all duration-200 w-[90%] h-[450px] sm:w-[95%] sm:h-[590px]" src={category.image}
                            width="50%" alt="" />
                    </div>
                </a>
            ))}


           

        </div>
    )
}
