import { Button, Alert, Row, Col } from "react-bootstrap";

const Alerts = (props) => {
    const { show, setShow, alertType, autoId } = props;
    var newLine = ""
    var showID = ""

    if (alertType === "success") {
        var message = "Producto registrado existosamente con el ID "
        newLine += "Diligencie el campo 'Filtrar por ID' si desea ver el registro en la tabla."
        showID = autoId - 1
    } else if (alertType === "danger") {
        message = "Para registrar un producto diligencie los campos Producto, Valor unitario y Estado del producto."
    }

    return (
        <div className="d-flex justify-content-center">
            <Alert show={show} variant={alertType}>
                <Row>
                    <Col xs="auto">
                        {message} <b>{showID}</b> <br /> {newLine}
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