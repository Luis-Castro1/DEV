import './App.css'
import { Categorys } from './assets/Pages/Categorys'
import { Home } from './assets/Pages/Home'
import { Login } from './assets/Pages/Login'
import { NavBar } from './assets/componentes/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './assets/componentes/ProductList'
import categorias from './assets/data/categorias'
import categoriasMujer from './assets/data/categoriasMujer'
import categoriasNiño from './assets/data/categoriasNiño'




function App() {



  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Categoria-Hombre/" element={<Categorys listProducts={categorias} />} />
        <Route path="/Categoria-Hombre/:categoria" element={<ProductList />} />

        <Route path="/Categoria-Mujer" element={<Categorys listProducts={categoriasMujer} />} />
        <Route path="/Categoria-Mujer/:categoria" element={<ProductList />} />

        <Route path="/Categoria-Niño" element={<Categorys listProducts={categoriasNiño} />} />
        <Route path="/Categoria-Niño/:categoria" element={<ProductList />} />

       

      </Routes >



    </BrowserRouter >

  )
}

export default App
