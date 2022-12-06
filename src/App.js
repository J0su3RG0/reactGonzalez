// Import de React
import React, {useState} from 'react';

// Import de react-router-dom
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.css';

// Importar las paginas de components/pages
import Home from './components/pages/home';
import Productos from './components/pages/productos';
import Contacto from './components/pages/contacto';
import Nosotros from './components/pages/nosotros';
import Button from './components/button';

// Importar la NavBar
import BarraNavegador from './components/navbar/NavBar';

// Importar contenido del carrito
import ItemListContainer from './components/itemListContainer';

// Import del Sidebar
import Sidebar from './components/sidebar';


function App() {
  const [isOpen, setOpen] = useState(false);
  const onHandlerClick = () => {
    setOpen(!isOpen);
  }
  return (
    <div className="App">
      <Sidebar onClose={onHandlerClick} isOpen={isOpen}>
        <h2>Item List</h2>
      </Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BarraNavegador /> }>
            <Route path='home' element={ <Home /> } />
            <Route path='producto' element={ <Productos /> } />
            <Route path='contacto' element={ <Contacto /> } />
            <Route path='nosotros' element={ < Nosotros /> } />
          </Route>
        </Routes>
        <Button text='Click me' onHandlerClick={onHandlerClick} />
      </BrowserRouter>
    </div>
  );
}

export default App;
