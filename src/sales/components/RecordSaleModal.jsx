import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button"

const RecordSaleModal = (props) => {


  var header = "";
  var body = "";
  if (props.properties.type === "SaleRecorded") {
    header = "¡Resgistro exitoso!"
    body = `Venta creada con el ID ${props.properties.saleID}.`

  } else if (props.properties.type === "warning") {
    header = "¡Atención!"
    body = "Diligencie todos los campos requeridos."
  }

  return (

    <Modal
      show={props.show}
      // onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1> {header} </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Aceptar</Button>
      </Modal.Footer>
    </Modal>

  )
}

export default RecordSaleModal;