import './App.css'
import { CategoryMan } from './assets/Pages/CategoryMan'
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
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Categoria-Hombre/" element={<CategoryMan listProducts={categorias} />} />
        <Route path="/Categoria-Hombre/:categoria" element={<ProductList />} />

        <Route path="/Categoria-Mujer" element={<CategoryMan listProducts={categoriasMujer} />} />
        <Route path="/Categoria-Mujer/:categoria" element={<ProductList />} />

        <Route path="/Categoria-Niño" element={<CategoryMan listProducts={categoriasNiño} />} />
        <Route path="/Categoria-Niño/:categoria" element={<ProductList />} />

       

      </Routes >



    </BrowserRouter >

  )
}

export default App
