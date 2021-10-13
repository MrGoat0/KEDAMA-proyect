import { Container, Row } from "react-bootstrap";
import Filter from "./FilterInput.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useState } from "react";
import '../../../styles/inpForm.css';

const ImputForm = (props) => {
    const { info, setInfo, setSearch } = props;
    const [missing, setMissing] = useState({ description: false, price: false, state: false });

    return (
        <Container className="mt-2">
            <Row className="d-flex justify-content-center form-input-box mb-3">
                <Product info={info} setInfo={setInfo} missingInput={missing.description} />
            </Row>

            <Row className="d-flex justify-content-center form-input-box mb-3">
                <Price info={info} setInfo={setInfo} missingInput={missing.price} />
            </Row>

            <Row className="d-flex justify-content-center form-select-custome mb-5">
                <State info={info} setInfo={setInfo} missingInput={missing.state} />
            </Row>

            <Row className="d-flex justify-content-center form-input-box mb-5">
                <Filter setSearch={setSearch} />
            </Row>

            <Row className="d-flex justify-content-center form-buttons mb-5">
                <RegisterButton
                    properties={props}
                    missing={missing}
                    setMissing={setMissing}
                />
            </Row>

        </Container>
    )
}

export default ImputForm;