
import { AddCart } from "./AddCart";
import "./Size.css";
import { useState } from "react";

export function Size({ onSelectSize }) {
    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
        console.log("Talla seleccionada:", newSize);
    };

    return (
        <div className="w-[100%]">

            <p className="font-[1000] text-[25px] py-[5px]">TALLAS</p>

            <div className="product-option__values py-[10px] flex justify-center    ">
                <label className=" ">
                    <input type="radio" className="size" value="xs" checked={selectedSize === 'xs'} onChange={handleSizeChange} />
                    <span className="">XS</span>
                </label>

                <label className=""  >
                    <input type="radio" className="size" value="s" checked={selectedSize === 's'} onChange={handleSizeChange} />
                    <span>S</span>
                </label>

                <label className="">
                    <input type="radio" className="size" value="m" checked={selectedSize === 'm'} onChange={handleSizeChange} />
                    <span>M</span>
                </label>

                <label className="" >
                    <input type="radio" className="size" value="l" checked={selectedSize === 'l'} onChange={handleSizeChange} />
                    <span>L</span>
                </label>

                <label className="" >
                    <input type="radio" className="size" value="xl" checked={selectedSize === 'xl'} onChange={handleSizeChange} />
                    <span>XL</span>
                </label>

            </div>


            <AddCart  selectedSize={selectedSize} />

        </div>
    )
}