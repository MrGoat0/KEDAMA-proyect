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
import api from "../../api"

// import Table from 'react-bootstrap/Table'

const Updateinfousers = (props) => {

  const { userRecords, setUserRecords } = props;

  const showInfo = async (event) => {

    const value = document.getElementById("search-input").value
    const response = await api.users.getByEmail(value)

    console.log(response)

    document.getElementById("name-input").value = response.name
    document.getElementById("email-input").value = response.email
    document.getElementById("state-input").value = response.state ? "Activo" : "Inactivo"
    document.getElementById("role-input").value = response.role

  }

  const updateBtn = async () => {
    const info = {
      name: document.getElementById("name-input").value,
      email: document.getElementById("email-input").value,
      state: document.getElementById("state-input").value === "Activo" ? true : false,
      role: document.getElementById("role-input").value
    }
    console.log(info)

    const response = await api.users.updateUser(
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info)
      }
    )

  }

  return (
    <div className="container-Category">

      <Header headerText={"Actualización de usuarios"} />
      {/* <ProductNav navSwitch={"Management"} page={"users"} /> */}

      <Container >
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">
                <Form.Label>Actualizar información de usuario</Form.Label>
                <Form.Control id="search-input" type="email" placeholder="Nombre o correo electrónico" />

              </Form.Group>
              <div className="space-button">
                <Link to="/categories/users">
                  <button variant="primary" type="submit" className="float-right" >
                    Listar
                  </button>
                </Link>

                <Link to="/categories/users/updateinfousers">
                  <button onClick={showInfo} variant="primary" type="submit" className="float-right" >
                    Actualizar
                  </button>
                </Link>




                <Link to="/categories/users/updaterolusers">
                  <button variant="primary" type="submit" className="float-right" >
                    Cambiar Rol
                  </button>
                </Link>

              </div>
            </Form>


          </Col>


          <Col >

            <Form.Group className="mb-3" className="just-font" controlId="formBasicEmail">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control id="name-input" type="name" placeholder="Nombre completo" />
              <Form.Label >Correo electrónico</Form.Label>
              <Form.Control id="email-input" type="name" placeholder="correo electrónico" />
              {/* <Form.Label>Estado</Form.Label> */}
              <FloatingLabel controlId="floatingSelect" label=""  >
                <Form.Select id="state-input" aria-label="Floating label select example" >
                  <option>Estado</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="" >
                <Form.Select id="role-input" aria-label="Floating label select example" >
                  Rol
                  <option>Rol</option>
                  <option value="admin">Administrador</option>
                  <option value="vendedor">Vendedor</option>
                </Form.Select>
              </FloatingLabel>
              <div className="for-save">
                <button type="submit" onClick={updateBtn} >
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
export default Updateinfousers