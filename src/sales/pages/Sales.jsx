import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import SalesList from "./SalesList";
const Sales = () => {
  const handleClick = () => {
    return <SalesList />;
  };
  return (
    <div>
      <Header />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/categories">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Button
              onClick={handleClick}
              type="button"
              variant="primary"
              /* className="float-end" */
            >
              Listar
            </Button>
            {/* <Nav.Link href="#home">Listar ventas</Nav.Link>
             <Nav.Link href="#features">Buscar</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <SalesList />
    </div>
  );
};
export default Sales;
