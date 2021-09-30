import { Button, Col } from "react-bootstrap";

const RegisterButton = (props) => {
    const { records, setRecord, description, price, state } = props;

    const handleClic = (event) => {
        setRecord([...records, { description: description, price: price, state: state }]);
    }

    return (
        <Col xs="auto">
            <Button onClick={handleClic} variant="primary">Registrar</Button>
        </Col>

    )
}

export default RegisterButton;