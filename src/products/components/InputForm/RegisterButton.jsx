import { Button, Col } from "react-bootstrap";

const RegisterButton = (props) => {
    const { records, setRecord, description, price, state,
        setShow, setAlert, autoId, setId, missing, setMissing } = props;

    const handleClic = (event) => {
        if (description !== "" && price !== "" && state !== "") {
            setRecord([...records, { id: autoId, description: description, price: parseInt(price), state: state }]);
            setShow(true)
            setAlert("success")
            setId(autoId + 1)
            setMissing({ description: false, price: false, state: false })

        } else {

            if (description === "") {
                missing.description = true
            } else { missing.description = false }
            if (price === "") {
                missing.price = true
            } else { missing.price = false }
            if (state === "") {
                missing.state = true
            } else { missing.state = false }
            setShow(true)
            setAlert("danger")

        }
    }

    return (
        <Col xs={1}>
            <Button className="form-input-buttons" onClick={handleClic} variant="primary">Registrar</Button>
        </Col>

    )
}

export default RegisterButton;