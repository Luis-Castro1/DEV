import { useState, useId } from "react"


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
                    />
                    <span>{minPrice}</span>
                </div>
            </section>
        </>
    )
}