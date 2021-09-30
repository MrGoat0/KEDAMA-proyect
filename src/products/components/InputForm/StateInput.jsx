import { Form, Col, FloatingLabel } from "react-bootstrap"

const State = (props) => {
    const { setState } = props;
    const saveValue = (event) => {
        setState(event.target.value);
    }
    return (
        <Col xs="auto">
            <Form.Select onChange={saveValue}>
                <option value="Sin definir"> Estado del producto</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
            </Form.Select>
        </Col>

    )
}

export default State;