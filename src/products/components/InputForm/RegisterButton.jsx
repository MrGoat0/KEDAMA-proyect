import { Button, Col } from "react-bootstrap";

const RegisterButton = (props) => {
    const { records, setRecord, description, price, state, setShow, setAlert, autoId, setId } = props;

    const handleClic = (event) => {
        if (description !== "" && price !== "" && state !== "") {
            setRecord([...records, { id: autoId, description: description, price: parseInt(price), state: state }]);
            setShow(true)
            setAlert("success")
            setId(autoId + 1)
        } else {
            setShow(true)
            setAlert("warning")
        }
    }

    return (
        <Col xs="auto">
            <Button onClick={handleClic} variant="primary">Registrar</Button>
        </Col>

    )
}

export default RegisterButton;