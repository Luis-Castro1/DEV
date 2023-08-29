import { createContext, useContext, useState } from "react";

//Crear contexto
export const CartContext = createContext();

//Crear provider 
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //Confirmar si el producto ya está en el carrito
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {

            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);
        }

        //Producto no está en el carrito

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const restQuantity = product => {
        const productInCart = cart.find(item => item.id === product.id);
        if (productInCart && productInCart.quantity >= 1) {
            const newCart = [...cart];
            const productIndex = newCart.findIndex(item => item.id === product.id);
            newCart[productIndex].quantity -= 1;
            setCart(newCart);
        }

        if(productInCart.quantity === 0){
            removeFromCart(product);
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            restQuantity,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )

}