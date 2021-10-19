import { Form, Col } from "react-bootstrap"

const State = (props) => {
    const { setState } = props;
    const saveValue = (event) => {
        setState(event.target.value)
    }
    return (
        <Col xs="auto">
            <Form.Select className="form-select-custome" onChange={saveValue}>
                <option value=""> Estado de la venta</option>
                <option value="Disponible">Pagado</option>
                <option value="No disponible">No pagado</option>
            </Form.Select>
        </Col>

    )
}

export default State;