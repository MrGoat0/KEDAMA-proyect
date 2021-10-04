import { Button, Alert, Row, Col } from "react-bootstrap";

const Alerts = (props) => {
    const { show, setShow, alertType, autoId } = props;
    var newLine = ""
    var showID = ""

    if (alertType === "success") {
        var message = "Producto registrado existosamente con el ID "
        newLine += ""
        showID = autoId - 1
    } else if (alertType === "danger") {
        message = "Diligencie todos los campos requeridos."
    }

    return (
        <Alert show={show} variant={alertType}>
            <Row>
                <Col xs="auto">
                    {message} <b>{showID}</b> <br /> {newLine}
                </Col>
                <Col>
                    <Button onClick={() => setShow(false)}
                        variant={"outline-" + alertType}>
                        Entendido
                    </Button>

                </Col>
            </Row>

        </Alert>

    )
}

export default Alerts;