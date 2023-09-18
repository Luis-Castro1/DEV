import './App.css'
import { Categorys } from './Pages/Categorys'
import { Home } from './Pages/Home'
import LoginApi from './Pages/LoginApi'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProductList } from './componentes/ProductList'
import categoriasHombre from './data/categorias'
import categoriasMujer from './data/categoriasMujer'
import categoriasNiño from './data/categoriasNiño'
import ProductView from './componentes/ProductView'
import { Registro } from './Pages/Registro'
import { ProtectRoute } from './Pages/ProtectRoute'
import { DashBoard } from './Pages/DashBoard'
import { useAuth } from './context/AuthProvider'
import { Login } from './Pages/Login'




function App() {

  const { isAuthenticated } = useAuth();


  return (

    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<ProtectRoute />}>
            <Route path="perfil" element={<DashBoard />} />
          </Route>

          <Route path="/login" element={isAuthenticated ? <Navigate to="/"/> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/"/> : <Registro />} />

          <Route path="/Categoria-Hombre/:categoria/:idProduct" element={<ProductView />} />
          <Route path="/Categoria-Hombre/:categoria" element={<ProductList gender='Hombre' />} />
          <Route path="/Categoria-Hombre" element={<Categorys gender='Hombre' />} />

          <Route path="/Categoria-Mujer" element={<Categorys gender='Mujer' />} />
          <Route path="/Categoria-Mujer/:categoria" element={<ProductList gender='Mujer' />} />
          <Route path="/Categoria-Mujer/:categoria/:product" element={<ProductView />} />

          <Route path="/Categoria-Niño" element={<Categorys gender='Niño' />} />
          <Route path="/Categoria-Niño/:categoria" element={<ProductList gender='Niño' />} />
          <Route path="/Categoria-Niño/:categoria/:product" element={<ProductView />} />



        </Routes >



      </>
    </BrowserRouter >

  )
}

export default App
