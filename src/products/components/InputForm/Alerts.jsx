import { Button, Alert, Row, Col } from "react-bootstrap";

const Alerts = (props) => {
    const { show, setShow, alertType } = props;

    if (alertType === "success") {
        var message = "Producto registrado existosamente con el ID 100099"
    } else {
        var message = "Para registrar un producto diligencie todos los campos."
    }

    return (
        <div className="d-flex justify-content-center">
            <Alert show={show} variant={alertType}>
                <Row>
                    <Col xs="auto">
                        {message}
                    </Col>
                    <Col xs="auto">
                        <Button onClick={() => setShow(false)} variant={"outline-" + alertType}>
                            Entendido
                        </Button>
                    </Col>
                </Row>

            </Alert>
        </div>

    )
}

export default Alerts;