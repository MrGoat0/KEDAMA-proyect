import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import SalesList from "./SalesList";
import Footer from "../../shared/Footer.jsx";
import "../../styles/category.css";
const Sales = () => {
  const handleClick = () => {
    return <SalesList />;
  };
  return (
    <div className="container-Category ">
      <Header />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Button variant="light" href="/categories">
              Home
            </Button>
          </Navbar.Brand>

          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Listar ventas</Nav.Link>
            <Nav.Link href="#features">Buscar</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Navbar.Brand>Realizar una busqueda por ID o Nombre:</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Realizar una busqueda"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Buscar </Button>
          </Form>
        </Container>
      </Navbar>
      <div>
        <SalesList />
      </div>

      <Footer />
    </div>
  );
};
export default Sales;