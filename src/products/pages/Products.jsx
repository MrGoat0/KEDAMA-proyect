import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import ProductNav from "../components/ProductNav.jsx";
import Alerts from "../components/InputForm/Alerts.jsx";
import React, { useState } from "react";

const Products = () => {
    const [records, setRecord] = useState([]);

    return (
        <div>
            <Header />
            <ProductNav navSwitch={"Register"} />

            <Container>

                <Row className="d-flex justify-content-center mb-3">
                    <Col xs={10}>
                        <InputForm />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Alerts />
                    </Col>

                </Row>

                <Row className="d-flex justify-content-center mb-3">
                    <Col xs={10}>
                        <ProductTable />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )

}
export default Products