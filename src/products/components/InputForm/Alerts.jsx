import { Button, Alert, Row, Col } from "react-bootstrap";

const Alerts = (props) => {
    const { show, setShow, alertType, autoId } = props;

    if (alertType === "success") {
        const showID = autoId - 1
        var message = "Producto registrado existosamente con el ID " + showID
    } else if (alertType === "warning") {
        var message = "Para registrar un producto diligencie todos los campos."
    } else if (alertType === "danger") {
        var message = "El ID especificado no existe!"
    }

    return (
        <div className="d-flex justify-content-center">
            <Alert show={show} variant={alertType}>
                <Row>
                    <Col xs="auto">
                        {message}
                    </Col>
                    <Col xs="auto">
                        <Button onClick={() => setShow(false)}
                            variant={"outline-" + alertType}>
                            Entendido
                        </Button>

                    </Col>
                </Row>

            </Alert>
        </div >

    )
}

export default Alerts;