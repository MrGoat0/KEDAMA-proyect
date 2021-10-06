import { Button, Alert, Row, Col, Container } from "react-bootstrap";

const Alerts = (props) => {
    const { alert, setAlert, id } = props;

    if (alert.type === "success") {
        var message = "Producto registrado con el ID "
        var showID = id - 1
    } else if (alert.type === "danger") {
        message = "Diligencie todos los campos requeridos."
    }

    return (
        <Container>
            <Alert
                show={alert.show}
                variant={alert.type}>
                <Row className="d-flex justify-content-between">
                    <Col xs="auto">
                        {message} <b>{showID}</b>
                    </Col>
                    <Col xs="auto">
                        <Button
                            onClick={() => setAlert({ show: false, type: alert.type })}
                            variant={"outline-" + alert.type}>
                            Ok
                        </Button>
                    </Col>
                </Row>
                <Row></Row>

            </Alert >

        </Container>

    )
}

export default Alerts;