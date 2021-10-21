
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import SalesTable from "../components/Table/SalesTable.jsx";
import SalesNav from "../components/SalesNav.jsx";
import { useState } from "react";

const SalesList = () => {
    const [records, setRecord] = useState([]);

    return (
        <div>
            <Header titulo={"Gestión de Ventas" }/>
            <div className="navbar">
                <SalesNav navSwitch={"Management"} />
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
                            <SalesTable records={records} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )

}
export default SalesList