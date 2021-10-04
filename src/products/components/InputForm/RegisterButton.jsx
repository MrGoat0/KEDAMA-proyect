import { Button, Col, Row } from "react-bootstrap";

const RegisterButton = (props) => {
    const { records, setRecord, info, setInfo, setAlert, missing, setMissing } = props;

    const handleClic = (event) => {
        if (info.description !== "" && info.price !== "" && info.state !== "") {
            setRecord([...records,
            { id: info.id, description: info.description, price: parseInt(info.price), state: info.state }]);
            setAlert({ show: true, type: "success" })
            info.id = info.id + 1
            setInfo(info)
            setMissing({ description: false, price: false, state: false })

        } else {
            if (info.description !== "") {
                missing.description = false
            } else { missing.description = true }
            if (info.price !== "") {
                missing.price = false
            } else { missing.price = true }
            if (info.state !== "") {
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