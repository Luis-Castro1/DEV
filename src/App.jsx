import './App.css'
import { Categorys } from './Pages/Categorys'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProductList } from './componentes/ProductList'
import categorias from './data/categorias'
import categoriasMujer from './data/categoriasMujer'
import categoriasNiño from './data/categoriasNiño'
import { ItemDetailContainer } from './componentes/ItemDetailContainer'
import { ProductPreviewProvider } from './context/ProductPreviewContext'
import ProductView from './componentes/ProductView'




function App() {



  return (

    <BrowserRouter>
      <ProductPreviewProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/Categoria-Hombre/" element={<Categorys listProducts={categorias} />} />
          <Route path="/Categoria-Hombre/:categoria" element={<ProductList gender='Hombre' />} />
          <Route path="/Categoria-Hombre/:categoria/:product" element={<ProductView />} />

          <Route path="/Categoria-Mujer" element={<Categorys listProducts={categoriasMujer} />} />
          <Route path="/Categoria-Mujer/:categoria" element={<ProductList gender='Mujer' />} />
          <Route path="/Categoria-Mujer/:categoria/:product" element={<ProductView />} />

          <Route path="/Categoria-Niño" element={<Categorys listProducts={categoriasNiño} />} />
          <Route path="/Categoria-Niño/:categoria" element={<ProductList gender='Niño' />} />
          <Route path="/Categoria-Niño/:categoria/:product" element={<ProductView />} />



        </Routes >



      </ProductPreviewProvider>
    </BrowserRouter >

  )
}

export default App
