import { Filters } from "./Filters"
import CategoriasNav from './CategoriasNav';

export function HeaderFilters(changeFilters) {

    return (
        <>
            <CategoriasNav />

            <h1>Filtros</h1>

            <Filters onChange={changeFilters} />
        </>
    )
}