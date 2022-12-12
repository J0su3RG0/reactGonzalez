// Import de React
import React, {useState, useEffect} from 'react';

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

// Import del header, menu hecho en clase
import Header from './components/header';

// Importar contenido del carrito
import ItemListContainer from './components/itemListContainer';

// Import del Sidebar
import Sidebar from './components/sidebar';

// Import de lista de productos Clase 5
import { PRODUCTS } from './constants/data/products';
import Card from './components/card';


function App() {
  const [isOpen, setOpen] = useState(false); // Estado del sidebar, seteado a esconderse
  const [showProducts, setShowProducts] = useState(false); // Estado de productos, seteado a esconderse

  const onHandlerCart = () => {
    setOpen(!isOpen);
  }

  return (
    <div className="container">
      <Sidebar onClose={onHandlerCart} isOpen={isOpen} />
      <Header numbersOfItems={0} onHandlerCart={onHandlerCart} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BarraNavegador /> }>
            <Route path='home' element={ <Home /> } />
            <Route path='producto' element={ <Productos /> } />
            <Route path='contacto' element={ <Contacto /> } />
            <Route path='nosotros' element={ < Nosotros /> } />
          </Route>
        </Routes>
        <h1>Productos Destacados</h1>
        <div className='products-container'>
        {PRODUCTS.map((product) => (
            <Card product={product} key={product.name} />
        ))}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
