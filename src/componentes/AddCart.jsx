import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../hooks/useCart'
import { ProductPreviewContext } from "../context/ProductPreviewContext";
import { useContext } from "react";

export function AddCart({ selectedSize }) {
    const { addToCart, cart, removeFromCart } = useCart();

    const { productPreview } = useContext(ProductPreviewContext);

    // Aquí puedes usar el ID de la URL para obtener el producto correspondiente desde el contexto
    const product = productPreview; // Aquí debes obtener el producto según su ID

    const handleAddToCart = () => {
        if (selectedSize !== "") {
            addToCart(product)
            console.log("Agregado al carrito:", selectedSize);
        } else {
            alert("Debes seleccionar una talla antes de agregar al carrito.");
        }
    };



    return (
        <div className="flex justify-center w-full items-center gap-4  my-[80px]">
            <button
                className="bg-transparent w-[80%] py-[1px] border border-stone-700 text-stone-700 font-medium text-center"
                type="button"
                onClick={handleAddToCart}
            >
                Agregar al carrito
                <FontAwesomeIcon className="ml-3" icon={faCartPlus} />
            </button>



            {selectedSize === "" && (
                <p className="text-red-500 mt-2">
                    Debes seleccionar una talla antes de agregar al carrito.
                </p>
            )}
        </div>
    );
}