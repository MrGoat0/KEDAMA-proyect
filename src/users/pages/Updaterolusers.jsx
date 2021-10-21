import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../../shared/Header.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import FloatingLabel from 'react-bootstrap/FloatingLabel'

// import Table from 'react-bootstrap/Table'


const Updaterolusers = () => {
  return (
    <div className="background">

      <Header headerText={"Actualización de roles"} />


      <Container>
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">
                <Form.Label>Actualizar información de usuario</Form.Label>
                <Form.Control type="email" placeholder="Nombre o ID" />

              </Form.Group>
              <div className="space-button">
                <Link to="/categories/users">
                  <button type="submit" className="float-right" >
                    Listar
                  </button>
                </Link>

                <Link to="/categories/users/updateinfousers">
                  <button type="submit" className="float-right" >
                    Actualizar
                  </button>
                </Link>




                <Link to="/categories/users/updaterolusers">
                  <button disabled type="submit" className="float-right" >
                    Cambiar Rol
                  </button>
                </Link>
              </div>
            </Form>


          </Col>


          <Col >

            <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">

              <Form.Label>Estado</Form.Label>

              <FloatingLabel controlId="floatingSelect" label=""  >
                <Form.Select aria-label="Floating label select example" >
                  <option>Estado</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="" >
                <Form.Select aria-label="Floating label select example" >
                  Rol
                  <option>Rol</option>
                  <option value="1">Administrador</option>
                  <option value="2">Vendedor</option>
                </Form.Select>
              </FloatingLabel>
              <div className="for-save">
                <button type="submit" >
                  Guardar
                </button>
              </div>
            </Form.Group>

          </Col>




        </Row>






        <Footer />
      </Container>
    </div>
  )

}
export default Updaterolusers