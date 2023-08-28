import React from 'react'
import { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './cart.css'
import { useCart } from '../hooks/useCart'

function cartItem({ thumbnail, price, title, quantity, addToCart }) {

    return (
        <li className='border-b-[#444] pb-4'>
            <img
                className='aspect-video w-full'
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}$
            </div>

            <footer className='flex gap-2 justify-center items-center'>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart} className='p-2'>+</button>
            </footer>
        </li>
    )
}


export const Cart = () => {

    const cartCheckBoxId = useId();

    const { cart, clearCart } = useCart();

    return (
        <>
            <label className='cart-button cursor-pointer' htmlFor={cartCheckBoxId}>
                Carrito <FontAwesomeIcon className='' icon={faCartShopping}></FontAwesomeIcon>
            </label>
            <input className='' id={cartCheckBoxId} type="checkbox" hidden />

            <aside className='cart  bg-[#000] p-8 fixed right-0 top-0 w-[200px] hidden'>
                <ul>
                    {cart.map(product => (
                        <cartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    Clear
                </button>
            </aside>


        </>
    )
}
