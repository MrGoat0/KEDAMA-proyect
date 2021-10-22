import { Button, Modal } from "react-bootstrap"
import api from "../../../api";
import { useState } from "react"

const TableRow = (props) => {
    const { row, properties } = props;
    const { setInfo, setMissing, refreshTable, setRefreshTable } = properties;
    const [showModal, setShowModal] = useState(false)

    const updateActivation = () => {
        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state
        document.getElementById("filter-input").value = row.id

        setInfo({
            _id: row._id,
            id: row.id,
            description: row.description,
            price: row.price,
            state: row.state
        })
        setMissing({ description: false, price: false, state: false })
    }

    const daleteActivation = async () => {
        await api.products.delete(row._id.toString(), {
            method: 'DELETE'
        })
        setShowModal(false)
        setRefreshTable(!refreshTable)
    }

    const picked = () => {
        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state
        document.getElementById("filter-input").value = row.id
    }

    const deleteConfirmation = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <tr id={row.id} onClick={picked}>
                <td >{row.id}</td>
                <td >{row.description}</td>
                <td >{row.price}</td>
                <td >{row.state}</td>
                <td >
                    <div className="d-flex justify-content-center">

                        <Button className="action-buttons ml-1"
                            onClick={deleteConfirmation}
                            variant="outline-danger">✖</Button>

                        <Button id={"updateBtn-" + row.id}
                            className="action-buttons ml-2"
                            onClick={updateActivation}
                            variant="primary"> 🖊 </Button>
                    </div>

                </td>
            </tr>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{"Confirmación"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Desea eliminar el producto con ID {row.id}?</Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Conservar
                    </button>
                    <button onClick={daleteActivation}>
                        Eliminar
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TableRow;