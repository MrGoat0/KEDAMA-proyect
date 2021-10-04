import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import ProductNav from "../components/ProductNav.jsx";
import { useState } from "react";

const ProductsList = () => {
    const [records, setRecord] = useState([]);

    return (
        <div>
            <Header />
            <div className="navbar">
                <ProductNav navSwitch={"Management"} />
            </div>
            <div className="grid-buttons">
                <Container>

                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={10}>
                            <InputForm pageSwitch={"Management"}
                                records={records}
                                setRecord={setRecord} />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={10}>
                            <ProductTable records={records} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )

}
export default ProductsList;