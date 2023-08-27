import { Filters } from "./Filters"
import CategoriasNav from './CategoriasNav';
import { NavBar } from "./NavBar";

export function HeaderFilters({changeFilters}) {

    return (
        <>
            <NavBar />
            <CategoriasNav />

            <h1>Filtros</h1>

            <Filters onChange={changeFilters} />
        </>
    )
}