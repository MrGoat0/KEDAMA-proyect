import { Form, Col } from "react-bootstrap"

const State = (props) => {
    const { setState, missingInput } = props;
    const saveValue = (event) => {
        setState(event.target.value)
    }
    if (missingInput) {
        return (
            <Col xs="auto">
                <Form.Select className="missing-cell form-select-custome" onChange={saveValue}>
                    <option value=""> Estado del producto</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                </Form.Select>
            </Col>

        )
    } else {
        return (
            <Col xs="auto">
                <Form.Select className="form-select-custome" onChange={saveValue}>
                    <option value=""> Estado del producto</option>
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                </Form.Select>
            </Col>

        )
    }

}

export default State;