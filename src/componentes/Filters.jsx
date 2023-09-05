import { useState, useId } from "react"


export function Filters({onChange}) {

    const [isSelect, setIsSelect] = useState(true);

    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterdId = useId();

    const handleChangeMinPrice = (e) =>{
  
        setMinPrice(e.target.value)
        onChange (prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeIsSelect = (e) =>{
        addEventListener('click', setIsSelect(!isSelect));
    }

    return (

        <>
            <section>
                <div className="flex gap-4 mx-8 items-center mt-[1rem]">
                    <label className="pointer-events-none" htmlFor={minPriceFilterdId}>Precio minimo</label>
                    <input
                        className={isSelect? "cursor-grab" : "cursor-grabbing"}
                        type="range"
                        id={minPriceFilterdId}
                        min= '0'
                        max= '3000'
                        onChange={handleChangeMinPrice}
                        onClickCapture={handleChangeIsSelect}
                        
                    />
                    <span>{minPrice}</span>
                </div>
            </section>
        </>
    )
}