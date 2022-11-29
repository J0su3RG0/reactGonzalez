import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const BarraNavegador = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="">nombreEmpresa</Navbar.Brand> //Icono de la empresa
          <Nav className="me-auto">
            <Nav.Link as={Link} to="..\pages\home.js">Home</Nav.Link>
            <Nav.Link as={Link} to="..\pages\productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="..\pages\contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="..\pages\nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="..\pages\carrito">carritoIcono</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraNavegador;