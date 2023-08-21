import './App.css'
import { CategoryMan } from './assets/Pages/CategoryMan'
import { Home } from './assets/Pages/Home'
import { Login } from './assets/Pages/Login'
import { NavBar } from './assets/componentes/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {ProductList} from './assets/componentes/ProductList'




function App() {



  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Categoria-Hombre/" element={<CategoryMan />} />

        <Route path="/Categoria-Hombre/:categoria" element={<ProductList />} />

        <Route path="/Categoria-Mujer" element={<h1>Mujer</h1>} >

        </Route>
        <Route path="/Categoria-Niño" element={<h1>Niño</h1>} />
      </Routes >



    </BrowserRouter >

  )
}

export default App
