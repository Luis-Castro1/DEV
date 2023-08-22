import { useState } from "react"


export function Filters({onChange}) {

    const [minPrice, setMinPrice] = useState(0);

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
                    <label htmlFor="price">Precio minimo</label>
                    <input
                        type="range"
                        id="price"
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