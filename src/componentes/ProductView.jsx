// import { AddCart } from "./AddCart";
// import { Favorites } from "./Favorites";
// import { Size } from "./Size";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductPreviewContext } from "../context/ProductPreviewContext";
import CategoriasNav from "./CategoriasNav";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { Recomendation } from "./Recomendation";



export const ProductView = ({ data }) => {
    const { id } = useParams();
    const { productPreview, closeProductPreview } = useContext(ProductPreviewContext);

    // Aquí puedes usar el ID de la URL para obtener el producto correspondiente desde el contexto
    const product = productPreview; // Aquí debes obtener el producto según su ID

    if (!product) {
        return null;
    }
    const navigate = useNavigate();

    const handleGoBackAndClose = () => {
        closeProductPreview(); // Cierra la vista previa del producto
        navigate(-1); // Regresa a la página anterior
    };

    return (
        <>
            <NavBar />
            <CategoriasNav />
            <button onClick={handleGoBackAndClose}>Cerrar</button>
            <div className="product-preview mx-8">
                <div className="bg-red-800 flex">
                    <div className="h-full  overflow-hidden">

                        <div className="w-full h-5/6 md:h-11/12 flex gap-x-2">
                            <img className="max-h-[400px] ease-in-out duration-300 align-top h-full w-[50%] object-cover  transform hover:scale-105  " src={product.img} alt="Camiseta sunday" />
                            <img className="max-h-[400px] ease-in-out duration-300 align-top h-full w-[50%] object-cover  transform hover:scale-105  " src={product.img} alt="Camiseta sunday" />
                        </div>

                        <div className="w-full h-5/6 md:h-11/12 flex gap-x-2">
                            <img className="max-h-[400px] ease-in-out duration-300 align-top h-full w-[50%] object-cover  transform hover:scale-105  " src={product.img} alt="Camiseta sunday" />
                            <img className="max-h-[400px] ease-in-out duration-300 align-top h-full w-[50%] object-cover  transform hover:scale-105  " src={product.img} alt="Camiseta sunday" />
                        </div>
                    </div>

                    <div className="xl:ml-[50px]">
                        <div className=" font-darker-grotesque text-black text-2xl font-light  lg:flex lg:flex-col"  >
                            <div className="mx-[20px] sm:mx-5">
                                <h1 className="font-bold text-4xl  mt-[20px] mb-[10px] ">{product.name}</h1>
                                <p className="mt-[15px] font-semibold">{product.price}</p>
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

                </div>

                <div className="ml-[40px] font-darker-grotesque text-black text-xl mt-[20px] mb-[200px]">
                    <p className="font-bold text-3xl">Comentarios</p>

                </div>

            </div>
            <div className='max-w-[1980px] justify-center sm:justify-between mx-10 flex flex-wrap'>
                <Recomendation />
            </div>
            <Footer />


        </>





    )
}
export default ProductView