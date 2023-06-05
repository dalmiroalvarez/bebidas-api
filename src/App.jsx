// STYLES
import './App.css'
// BOOTSTRAP
import { Container } from 'react-bootstrap'
// COMPONENTS
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
// CONTEXT
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {
  

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className='py-5'>
          <h1>Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida/>
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
