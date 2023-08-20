import { Categorias } from '../componentes/Categorias'
import { Slider } from '../componentes/Slider'
import { Footer } from '../componentes/Footer'


export const Home = () => {
    return (
        <div>
            <div className="max-w-[1980px] grid md:grid-cols-3  grid-cols-1 justify-between mt-9 pb-3 pt-5 text-white">
                <Categorias
                    to="/Categoria-Hombre"
                    title="HOMBRE"
                    image="/src/assets/imagenes/Hombre.png"
                    alt="Categoría Hombre"
                ></Categorias>

                <Categorias
                    to="/Categoria-Mujer"
                    title="MUJER"
                    image="/src/assets/imagenes/Mujer.png"
                    alt="Categoría Mujer"
                ></Categorias>

                <Categorias
                    to="/Categoria-Niño"
                    title="NIÑO"
                    image="/src/assets/imagenes/Niño.png"
                    alt="Categoría Niño"
                ></Categorias>

            </div>

            <Slider></Slider>
            <Footer />
        </div>
    )
}
