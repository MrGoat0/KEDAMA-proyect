import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../../shared/Header.jsx";
import ProductNav from "../../shared/ProductNav.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import '../../../src/styles/shared.css'

const Users = () => {
  return (
    <div className="container-Category">

      <Header headerText={"Listar usuarios"} />

      {/* <ProductNav navSwitch={"Register"} page={"users"} /> */}

      <Container >
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> <div className="just-font">Listar información de usuario</div> </Form.Label>
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
                  <button type="submit" className="float-right" >
                    Cambiar Rol
                  </button>
                </Link>
              </div>

            </Form>


          </Col>


          <Col >
            <Table className="table" >
              <thead >
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Fecha Ingreso</th>
                  <th>Correo</th>
                  <th>Procedencia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>001</td>
                  <td>11/02/2005</td>
                  <td>mark@gmail.com</td>
                  <td>buenaventura</td>
                </tr>

              </tbody>
            </Table>
          </Col>

        </Row>

        <Footer />
      </Container>
    </div>
  )


}
export default Users