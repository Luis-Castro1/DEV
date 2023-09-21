
import { HeaderFilters } from './HeaderFilters';
import { Products } from './Products'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Productoclient } from '../client/ProductoClient';

function useFilters(categoria) {

    const [filters, setFilters] = useState({
        id_categoria: categoria,
        minPrice: 0
    });

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.precio >= filters.minPrice && product.id_categoria === filters.id_categoria &&
                (
                    filters.id_categoria === 'all' ||
                    product.id_categoria === filters.id_categoria
                )
            )
        })
    }
    console.log(filters)
    return { filterProducts, setFilters }
   
    
}

export function ProductList() {
    const location = useLocation();
    const idCategoria = location.state;
    const [products, setProducts] = useState({ data: [] })
    const FindByCategoria = async() => {
      const ProdutosObtenidos = await Productoclient(idCategoria);
      console.log("productos obtenidos:", ProdutosObtenidos);
      setProducts(ProdutosObtenidos)
    }
    useEffect(
      ()=> {
        FindByCategoria();
      },[]);

    const {filterProducts, setFilters} = useFilters(idCategoria)

    const filteredProducts = filterProducts(products.data)

    return (
        <>
            <HeaderFilters changeFilters={setFilters} />
            <Products products={filteredProducts} />
        </>
    )
}
export default ProductList