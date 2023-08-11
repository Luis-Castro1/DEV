import './App.css'
import { Categorias } from './assets/componentes/Categorias'
import { NavBar } from './assets/componentes/NavBar'
import { Slider } from './assets/componentes/Slider'


function App() {



  return (
    <div className='bg-[#EBECF0] overflow-hidden box-border'>
        <NavBar />
        <Categorias />
        <Slider />
         
    </div>
  )
}

export default App
