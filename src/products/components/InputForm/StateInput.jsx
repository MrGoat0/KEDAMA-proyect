import { Form, Col } from "react-bootstrap"

const State = (props) => {
    const { setState, missingInput } = props;

    if (missingInput) {
        var missed = " missing-cell"
    } else {
        var missed = ""
    }

    const saveValue = (event) => {
        setState(event.target.value)
    }
    return (
        <Col xs={2}>
            <Form.Label>Estado del producto</Form.Label>
            <Form.Select className={"form-select-custome" + missed} onChange={saveValue}>
                <option value=""></option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
            </Form.Select>
        </Col>

    )

}

export default State;