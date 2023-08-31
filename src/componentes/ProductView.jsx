// import { AddCart } from "./AddCart";
// import { Favorites } from "./Favorites";
// import { Size } from "./Size";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ProductPreviewContext } from "../context/ProductPreviewContext";
import CategoriasNav from "./CategoriasNav";
import Footer from "./Footer";
import { NavBar } from "./NavBar";
import { Recomendation } from "./Recomendation";
import { motion } from "framer-motion";
import { useState } from "react";



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

    const imgSlide = [product.img, product.img, product.img, product.img];
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);



    return (
        <>
            <NavBar />
            <CategoriasNav />
            <button onClick={handleGoBackAndClose}>Cerrar</button>
            <div className="product-preview ">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-x-0 md:mx-20">
                    <div className="space-y-2 hidden overflow-hidden md:flex md:flex-col  bg-red-400">

                        <div className="grid grid-cols-2 gap-x-2 w-full">
                            <img className="object-cover ease-in-out duration-300  transform hover:scale-105 w-full h-full" src={product.img} alt="Camiseta sunday" />
                            <img className="object-cover ease-in-out duration-300  transform hover:scale-105 h-full " src={product.img} alt="Camiseta sunday" />
                        </div>

                        <div className="grid grid-cols-2 gap-x-2  w-full">
                            <img className="ease-in-out duration-300 h-full w-[100%] object-cover  transform hover:scale-105" src={product.img} alt="Camiseta sunday" />
                            <img className="ease-in-out duration-300 h-full w-[100%] object-cover  transform hover:scale-105" src={product.img} alt="Camiseta sunday" />
                        </div>

                    </div>

                    <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden mx-1 md:hidden">
                        <motion.div className="inner-carousel flex" whileTap={{ cursor: "grabbing" }}
                            drag='x'
                            dragConstraints={{ right: 0, left: -width }}>
                            {imgSlide.map(image => {
                                return (
                                    <motion.div key={image} className="item min-h-[40rem] min-w-[30rem] py-10 px-[2px] sm:px-5 ">
                                        <img className=" w-full h-full rounded-[20px] pointer-events-none" src={image} alt="" />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>




                    <div className=" font-darker-grotesque text-black text-2xl font-light"  >
                        <div className=" sm:ml-20 bg-orange-600 min-w-full">
                            <h1 className="font-bold text-4xl  mt-[20px] mb-[10px] ">{product.name}</h1>
                            <p className="mt-[15px] font-semibold">{product.price}</p>
                            <p className="mt-[5px]" >Color: hueso</p>
                        </div>

                        <div className="sm:ml-20 text-justify my-3 w-[70%] ">
                            <p className="">Camiseta estampada cuello redondo para hombre de ajuste holgado,jersey suave de algodón 100 % </p>
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
            <Footer />


        </>





    )
}
export default ProductView