import { Form, Col, FloatingLabel } from "react-bootstrap"

const State = () => {
    return (
        <Col xs="auto">
            <Form.Select defaultValue="0">
                <option>Estado del producto</option>
                <option value="1">Disponible</option>
                <option value="2">No disponible</option>
            </Form.Select>
        </Col>

    )
}

export default State;