import './App.css'
import { Categorys } from './Pages/Categorys'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { NavBar } from './componentes/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './componentes/ProductList'
import categorias from './data/categorias'
import categoriasMujer from './data/categoriasMujer'
import categoriasNiño from './data/categoriasNiño'
import { Cart } from './componentes/Cart'
import { ProductView } from './componentes/ProductView'




function App() {



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Categoria-Hombre/" element={<Categorys listProducts={categorias} />} />
        <Route path="/Categoria-Hombre/:categoria" element={<ProductList gender='Hombre' />} />
        <Route path="/Categoria-Hombre/:categoria/:product" element={<ProductView />} />

        <Route path="/Categoria-Mujer" element={<Categorys listProducts={categoriasMujer} />} />
        <Route path="/Categoria-Mujer/:categoria" element={<ProductList gender='Mujer' />} />

        <Route path="/Categoria-Niño" element={<Categorys listProducts={categoriasNiño} />} />
        <Route path="/Categoria-Niño/:categoria" element={<ProductList gender='Niño' />} />



      </Routes >



    </BrowserRouter >

  )
}

export default App
