import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import CartWidget from '../cartWidget/index' //CartWidget
import ItemListContainer from '../itemListContainer';




const BarraNavegador = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">nombreEmpresa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="..\pages\home.js">Home</Nav.Link>
            <Nav.Link as={Link} to="..\pages\productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="..\pages\contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="..\pages\nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="..\pages\carrito"><CartWidget /><ItemListContainer numeroItem='0'/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default BarraNavegador;