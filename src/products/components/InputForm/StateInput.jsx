import { Form, Col } from "react-bootstrap"

const State = (props) => {
    const { setState, missingInput } = props;

    if (missingInput) {
        var missed = " missing-cell"
    } else {
         missed = ""
    }

    const saveValue = (event) => {
        setState(event.target.value)
    }
    return (
        <Col xs={2}>
            <Form.Label>Estado</Form.Label>
            <Form.Select id="state-input" className={"statePicker form-select-custome" + missed} onChange={saveValue}>
                <option value=""></option>
                <option value="Disponible">Disponible</option>
                <option value="No disponible">No disponible</option>
            </Form.Select>
        </Col>

    )

}

export default State;