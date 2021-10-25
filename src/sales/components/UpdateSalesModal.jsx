import { Form, Modal, Container, Row, Col } from "react-bootstrap"

const UpdateSaleModal = (props) => {
    const { show, onHide, row, updateData } = props
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>{"Actualización de venta"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="mb-3">ID de la venta: {row._id}</h6>
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
                <button onClick={onHide}>
                    Cancelar
                </button>
                <button onClick={updateData}>
                    Guardar cambios
                </button>
            </Modal.Footer>
        </Modal>
    )
}
export default UpdateSaleModal
