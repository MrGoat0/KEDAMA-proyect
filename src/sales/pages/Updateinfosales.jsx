import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../../shared/Header.jsx";
import ProductNav from "../../shared/ProductNav.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

// import Table from 'react-bootstrap/Table'


const Updateinfosales = () => {
  return (
    <div className="container-Category">

      <Header headerText={"Actualización de usuarios"} />
      <ProductNav navSwitch={"Management"} page={"sales"} />

      <Container className="dark-background-body">
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

              <Link href="/categories/sales/updateinputsales">
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
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="name" placeholder="Nombres" />
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="name" placeholder="Apellidos" />
              <Form.Label>Identificacion</Form.Label>
              <Form.Control type="name" placeholder="Identificacion" />
              <Form.Label>Procedencia</Form.Label>
              <Form.Control type="name" placeholder="Procedencia" />
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
export default Updateinfosales