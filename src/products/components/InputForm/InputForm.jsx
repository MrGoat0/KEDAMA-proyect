import { Container, Row, Col } from "react-bootstrap";
import AutoId from "./AutoId.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useState } from "react";

const ImputForm = (props) => {
    const { description, setDescription, price, setPrice,
        state, setState, records, setRecord, setAlert, autoId, setId, setSearchId } = props;

    const [missing, setMissing] = useState({ description: false, price: false, state: false });

    return (
        <Container className="mt-3">


            <Row className="d-flex justify-content-center mb-4">
                <Product setDescription={setDescription}
                    missingInput={missing.description} />
                <Price setPrice={setPrice} missingInput={missing.price} />
            </Row>

            <Row className="d-flex justify-content-center mb-2">
                <State setState={setState} missingInput={missing.state} />
                <AutoId setSearchId={setSearchId} />
            </Row>

            <Row className="d-flex justify-content-center mb-4">
                <RegisterButton records={records}
                    setRecord={setRecord}
                    description={description}
                    price={price}
                    state={state}
                    setAlert={setAlert}
                    autoId={autoId}
                    setId={setId}
                    missing={missing}
                    setMissing={setMissing} />
            </Row>
        </Container>
    )
}

export default ImputForm;