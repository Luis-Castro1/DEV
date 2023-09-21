
import { AddCartProductView } from "./AddCartProductView";
import "./Size.css";
import { useState,useEffect } from "react";
import { Referenciaclient } from '../client/ReferenciaClient';

export function SizeProductView(props) {
    const idProducto = props.id;
    const [references, setReferences] = useState({ data: [] })
    const FindByProducto = async() => {
      const ReferenciasObtenidas = await Referenciaclient(idProducto);
      setReferences(ReferenciasObtenidas)
    }
    useEffect(
      ()=> {
        FindByProducto();
      },[]);
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
        console.log("Talla seleccionada:", newSize);
    };

    return (
        <div className="w-[100%]">
            <div className="product-option__values py-[10px] flex sm:justify-center">
            {references.data.map((reference) => (
                <label key={reference.id} className=" ">
                    <input 
                    type="radio" 
                    className="size" 
                    value={reference.id} 
                    checked={selectedSize === reference.id} 
                    onChange={handleSizeChange} />
                    <span className="">{reference.talla}</span>
                </label>
                ))}
            </div>


            <AddCartProductView  
            selectedSize={selectedSize} 
            />

        </div>
    )
}