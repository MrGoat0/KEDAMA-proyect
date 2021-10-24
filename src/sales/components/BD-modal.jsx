import Modal from 'react-bootstrap/Modal'
import Button  from 'react-bootstrap/Button'
// import SalesTable from "../components/TableWithSales"
import BDModalSelector from './BDModalSelector'
import '../../styles/Sales/listadoVentas.css'


const BDModal = (props) => {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Registro de información a facturar</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="p-3">Seleccione la fila para llenar el campo requerido:</h5>
          <BDModalSelector
            type={props.type}
            tableToShow={props.tableToShow}
            changeProduct = {props.changeProduct}
            changeUserName = {props.changeUserName}
            changeSellerName = {props.handleChangeSellerName}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default BDModal;