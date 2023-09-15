import { useState, useId } from "react"
import "./styled.css"

export function Filters({onChange}) {

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterdId = useId();

    const handleChangeMinPrice = (e) =>{

        setMinPrice(e.target.value)
        
        onChange (prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    return (
        <>
            <section>
           
                <div className="flex gap-4 mx-8 items-center">
                    <label htmlFor={minPriceFilterdId}>Precio minimo</label>
                    <input
                        type="range"
                        id={minPriceFilterdId}
                        min= '0'
                        max= '3000'
                        onChange={handleChangeMinPrice}
                        className=" filtro appearance-none bg- border-3 border-slate-600 rounded-2xl"
                    />
                    <span>{minPrice}</span>
                </div>
            </section>
        </>
    )
}