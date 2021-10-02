import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Producto = ({ producto }) => {
  /* const handleClick = () => {
    <Edit />;
  }; */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <tr className="text-center">
      <th className="text-left">{producto.id}</th>
      <th>{producto.cliente}</th>
      <th>{producto.producto}</th>
      <th>{producto.price}</th>
      <th>{producto.location}</th>
      <th>
        {/* <Button href="/categories/sales/edit" type="button" variant="primary">
          <AiFillEdit />- Editar Venta
          <Edit producto={producto} />
        </Button> */}
        <Button onClick={handleShow} variant="primary">
          <AiFillEdit /> Editar Venta
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar valores</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>ID-{producto.id}</Form.Label>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Cliente</Form.Label>
                <Form.Control type="text" placeholder={producto.cliente} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Producto</Form.Label>
                <Form.Control type="text" placeholder={producto.producto} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder={producto.price} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Tienda (Localización)</Form.Label>
                <Form.Control type="text" placeholder={producto.location} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </th>
      <th>
        <Button variant="primary" href="#">
          <AiFillDelete /> Borrar venta
        </Button>
      </th>
    </tr>
  );
};

export default Producto;
