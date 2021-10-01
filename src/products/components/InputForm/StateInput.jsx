import { Form, Col } from "react-bootstrap"

const State = (props) => {
    const { setState } = props;
    const saveValue = (event) => {
        setState(event.target.value)
    }
    return (
        <Col xs="auto">
            <Form.Select onChange={saveValue}>
                <option value=""> Estado del producto</option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
            </Form.Select>
        </Col>

    )
}

export default State;