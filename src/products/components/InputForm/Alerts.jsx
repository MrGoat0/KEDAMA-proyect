import { Button, Alert, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Alerts = () => {

    // <div className="d-flex justify-content-center">
    //     <Alert variant="success">
    //         El producto ha sido registrado satisfactoramente con el ID 100099
    //     </Alert>
    // </div>
    const [show, setShow] = useState(true);

    return (
        <div className="d-flex justify-content-center">
            <Alert show={show} variant="success">
                <Row>
                    <Col xs="auto">
                        ¡Registro exitoso! El producto ha sido registrado con el ID 100099
                    </Col>
                    <Col xs="auto">
                        <Button onClick={() => setShow(false)} variant="outline-success">
                            Entendido
                        </Button>
                    </Col>
                </Row>

            </Alert>
        </div>

    )
}

export default Alerts;