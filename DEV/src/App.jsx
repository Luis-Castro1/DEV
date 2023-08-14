import './App.css'
import { Categorias } from './assets/componentes/Categorias'
import { NavBar } from './assets/componentes/NavBar'
import { Slider } from './assets/componentes/Slider'
import { Footer } from './assets/componentes/Footer'


function App() {



  return (
    <div className='bg-[#EBECF0]  box-border'>
        <NavBar />
        <Categorias />
        <Slider />
        <Footer />
         
    </div>
  )
}

export default App
