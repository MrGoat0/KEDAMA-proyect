import api from "../../api"
import { useState, useEffect } from "react"
import { Form, Button, Modal, Container, Row, Col } from "react-bootstrap"

const TableRow = (props) => {
    const { row, type } = props;
    const [sellerName, setSellerName] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [productPrice, setProductPrice] = useState()

    useEffect(() => {
        const fetchUserByID = async () => {
            const response = await api.users.getByID(row.seller)
            setSellerName(response ? response.name : "Desconocido")
        }
        fetchUserByID()
    }, [row.seller])

    const updateActivation = () => {
        setShowModal(true)
        setProductPrice(row.total / row.quantity)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const updateData = async () => {
        var reqBody = {}
        if (document.getElementById("date-modal-form").value === "") {
            reqBody.date = document.getElementById("date-modal-form").placeholder
        } else {
            reqBody.date = document.getElementById("date-modal-form").value
        }
        if (document.getElementById("client-modal-form").value === "") {
            reqBody.clientName = document.getElementById("client-modal-form").placeholder
        } else {
            reqBody.clientName = document.getElementById("client-modal-form").value
        }
        if (document.getElementById("quantity-modal-form").value === "") {
            reqBody.quantity = document.getElementById("quantity-modal-form").placeholder
        } else {
            reqBody.quantity = document.getElementById("quantity-modal-form").value
        }
        reqBody.total = productPrice * reqBody.quantity

        await api.sales.update(row._id, {
            method: "PUT",
            body: JSON.stringify(reqBody)
        })
        setShowModal(false)
        window.location.reload()
    }

    const picked = () => {
        document.getElementById("user-form").value = row.name;
        document.getElementById("seller-form").value = row.name;
    }

    //for listing sales in salesList interfaces
    if (type === "salesRecorded") {
        return (
            <>
                <tr className="h-100">
                    {/* <td >{row._id}</td> */}
                    <td>{row.date}</td>
                    <td>{sellerName}</td>
                    <td>{row.clientName}</td>
                    <td>{row.productInfo.description}</td>
                    <td>{row.quantity}</td>
                    <td>{row.total}</td>
                    <td >
                        <div className="d-flex justify-content-center">

                            <Button id={"updateBtn-" + row._id}
                                className="action-buttons ml-2"
                                onClick={updateActivation}
                                variant="primary"> 🖊 </Button>
                        </div>

                    </td>

                    {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
                </tr>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>{"Actualización de venta"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="mb-3">Campos modificables:</h5>
                        <Container className="mt-2">
                            <Row className="d-flex justify-content-center form-input-box mb-3">
                                <Col>
                                    <Form.Label>
                                        Fecha de la venta:
                                    </Form.Label>
                                    <Form.Control id="date-modal-form"
                                        type="text"
                                        placeholder={row.date}
                                    />
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center form-input-box mb-3">
                                <Col>
                                    <Form.Label>
                                        Nombre del cliente:
                                    </Form.Label>
                                    <Form.Control id="client-modal-form"
                                        type="text"
                                        placeholder={row.clientName}
                                    />
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center form-select-custome mb-5">
                                <Col>
                                    <Form.Label>
                                        Cantidad:
                                    </Form.Label>
                                    <Form.Control id="quantity-modal-form"
                                        type="text"
                                        placeholder={row.quantity}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose}>
                            Cancelar
                        </button>
                        <button onClick={updateData}>
                            Guardar cambios
                        </button>
                    </Modal.Footer>
                </Modal>
            </>)
    }
    //for modal in registerSales interface
    if (type === "usuario" || type === "vendedor") {
        return (<tr onClick={picked}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.state}</td>
            <td>{row.role}</td>
        </tr>)
    } else if (type === "producto") {
        return (
            <tr>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <td>{row.state}</td>
                {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
            </tr>
        )
    }
}
export default TableRow;