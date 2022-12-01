import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar las paginas de components/pages
import Home from './components/pages/home';
import Productos from './components/pages/productos';
import Contacto from './components/pages/contacto';
import Nosotros from './components/pages/nosotros';

// Importar la NavBar
import BarraNavegador from './components/navbar/NavBar';

// Importar contenido del carrito
import ItemListContainer from './components/itemListContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BarraNavegador /> }>
            <Route path='home' element={ <Home /> } />
            <Route path='producto' element={ <Productos /> } />
            <Route path='contacto' element={ <Contacto /> } />
            <Route path='nosotros' element={ < Nosotros /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
