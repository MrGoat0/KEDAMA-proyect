import { Button, Col, Row } from "react-bootstrap";

const RegisterButton = (props) => {
    const { records, setRecord, description, price, state, setAlert, autoId, setId, missing, setMissing } = props;

    const handleClic = (event) => {
        if (description !== "" && price !== "" && state !== "") {
            setRecord([...records,
            { id: autoId, description: description, price: parseInt(price), state: state }]);
            setAlert({ show: true, type: "success" })
            setId(autoId + 1)
            setMissing({ description: false, price: false, state: false })

        } else {
            if (description !== "") {
                missing.description = false
            } else { missing.description = true }
            if (price !== "") {
                missing.price = false
            } else { missing.price = true }
            if (state !== "") {
                missing.state = false
            } else { missing.state = true }
            setAlert({ show: true, type: "danger" })
            setMissing(missing)
        }
    }

    return (
        <Col xs="auto">
            < Row >
                <label className="hidden">Buscar</label>
            </Row >
            <Row>
                <Button className="form-input-buttons ml-2" onClick={handleClic} variant="primary">Registrar</Button>
            </Row>

        </Col >

    )
}

export default RegisterButton;