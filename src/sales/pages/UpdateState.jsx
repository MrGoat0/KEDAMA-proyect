import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../Header.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import Table from 'react-bootstrap/Table'


const UpdateState = () => {
return(
    <div className="dark-background-body">

    <Header />
    

   <Container>
   <Row>
    <Col >

    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Actualizar información de usuario</Form.Label>
    <Form.Control type="email" placeholder="Nombre o ID" />
    
  </Form.Group>

<Button variant="primary" type="submit" className="float-right" >
    Listar
  </Button>

  <Link to="/sales/updateinputsales">
  <Button variant="primary" type="submit" className="float-right" >
    Actualizar
  </Button>
  </Link>

  <Button variant="primary" type="submit" className="float-right" >
    Cambiar Rol
  </Button>


  </Form>


    </Col>
   
      
      <Col >

      <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Label>Estado</Form.Label>

  <FloatingLabel controlId="floatingSelect" label="Works with selects"  >
  <Form.Select aria-label="Floating label select example" >
    <option>Estado</option>
    <option value="1">Activo</option>
    <option value="2">Inactivo</option>
  </Form.Select>
</FloatingLabel>
<FloatingLabel controlId="floatingSelect" label="Works with selects" >
  <Form.Select aria-label="Floating label select example" >
  <Form.Label>Rol</Form.Label>
    <option>Rol</option>
    <option value="1">Administrador</option>
    <option value="2">Vendedor</option>
  </Form.Select>
</FloatingLabel>
    
  </Form.Group>
  <Button variant="primary" type="submit" >
    Guardar
  </Button>
</Col>


    

  </Row>

        
  

  

  <Footer />
</Container>
    </div>
)

}
export default UpdateState