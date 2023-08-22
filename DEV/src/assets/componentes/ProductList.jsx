import { products as initialProducts } from '../data/products.json'
import { HeaderFilters } from './HeaderFilters';
import { Products } from './Products'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function useFilters() {

    const { categoria } = useParams();
    console.log(categoria);

    const [filters, setFilters] = useState({

        category: categoria,
        minPrice: 0
    });

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }

    return { filterProducts, setFilters }
}

export function ProductList() {

    const [products] = useState(initialProducts)

    const {filterProducts, setFilters} = useFilters()

    const filteredProducts = filterProducts(products)

    return (

        <>


            <HeaderFilters changeFilters={setFilters} />
            <Products products={filteredProducts} />

        </>


    )
}
export default ProductList