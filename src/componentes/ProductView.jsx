// import { AddCart } from "./AddCart";
// import { Favorites } from "./Favorites";
// import { Size } from "./Size";

import CategoriasNav from "./CategoriasNav";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { Recomendation } from "./Recomendation";

export function ProductView(){
    return(
            <>
            <NavBar />
            <CategoriasNav/>
            
            <div className="flex flex-wrap lg:grid lg:grid-cols-2   mx-[20px] xl:mx-[10rem] mt-[10rem] ">   
                <div className="flex flex-wrap lg:grid lg:grid-cols-2 justify-center sm:mb-[20px] sm:gap-x-[20px] gap-y-[20px]  lg:sm:gap-x-[5px] lg:mx-2">  
                    <img className="h-[260px] ease-in-out duration-300 sm:w-[250px]  md:w-[330px] md:h-[450px] lg:w-[280px] lg:h-[400px] xl:w-[380px] xl:h-[550px]  transform hover:scale-105  " src="image1.png" alt="Camiseta sunday" />
                    <img className="h-[260px] ease-in-out duration-300 hover:scale-105 sm:w-[250px]  md:w-[330px] md:h-[450px] lg:w-[280px] lg:h-[400px] xl:w-[380px] xl:h-[550px] "src="image2.png" alt="Camiseta sunday" />
                    <img className="h-[260px] ease-in-out duration-300 transform hover:scale-105 sm:w-[250px]   md:w-[330px] md:h-[450px] lg:w-[280px] lg:h-[400px] xl:w-[380px] xl:h-[550px] " src="image3.png" alt="Camiseta sunday" />
                    <img className="h-[260px] ease-in-out duration-300  hover:scale-105 sm:w-[250px]  md:w-[330px] md:h-[450px] lg:w-[280px] lg:h-[400px] xl:w-[380px] xl:h-[550px] "src="image4.png" alt="Camiseta sunday" />
                </div> 
           
                <div className="xl:ml-[50px]">
                    <div className=" font-darker-grotesque text-black text-2xl font-light  lg:flex lg:flex-col"  >
                        <div className="mx-[20px] sm:mx-5">
                            <h1 className= "font-bold text-4xl  mt-[20px] mb-[10px] ">Camiseta Sunday</h1>
                            <p className="mt-[15px] font-semibold">$75.000</p>
                            <p className="mt-[5px]" >color:hueso</p>
                            <div className="lg:w-[50%]">
                                <p className="mt-[5px] ">Camiseta estampada cuello redondo para hombre de ajuste holgado,jersey suave de algodón 100 % </p>
                            </div>
                        </div>
                        {/* <Size/> */}
                    </div >
                        <div className="flex justify-center gap-x-[1rem] lg:mx-5  items-center py-5 my-5 lg:justify-normal">
                            {/* <AddCart/>
                            <Favorites/> */}
                        </div>
                </div>

                    <div className="ml-[40px] font-darker-grotesque text-black text-xl mt-[20px] mb-[200px]">
                        <p className="font-bold text-3xl">Comentarios</p>
            
                    </div>
            </div>
            <div className='max-w-[1980px] justify-center sm:justify-between mx-10 flex flex-wrap'>
        <Recomendation />
      </div>
            <Footer/>


            </>



        
        
    )
}  