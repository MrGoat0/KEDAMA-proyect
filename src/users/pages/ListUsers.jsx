import React, { useState, useEffect } from "react";
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
import api from "../../api"

const ListUsers = (props) => {

  const { userRecords, setUserRecords } = props;

  useEffect(() => {
    const fetchGetAll = async () => {
      const response = await api.users.getAllUsers();
      setUserRecords(response);
    };
    fetchGetAll()
  }, []);


  return (
    <div className="container-Category">

      <Header headerText={"Listar usuarios"} />

      {/* <ProductNav navSwitch={"Register"} page={"sales"} /> */}

      <Container >
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Listar información de usuario</Form.Label>
                <Form.Control type="email" placeholder="Nombre o correo electrónico" />

              </Form.Group>

              <Button variant="primary" type="submit" className="float-right" >
                Listar
              </Button>


              <Link to="/categories/sales/updateinputsales">
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
            <Table >
              <thead >
                <tr>
                  <th>Nombre completo</th>
                  <th>e-mail</th>
                  <th>Estado</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>{userRecords.map((row) => (
                <tr>
                  <td >{row.name}</td>
                  <td >{row.email}</td>
                  <td >{row.state ? "Activo" : "Inactivo"}</td>
                  <td >{row.role}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>




        </Row>






        <Footer />
      </Container>
    </div>
  )

}
export default ListUsers