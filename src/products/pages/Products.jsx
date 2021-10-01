import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import ProductNav from "../components/ProductNav.jsx";
import Alerts from "../components/InputForm/Alerts.jsx";
import React, { useState } from "react";
import "../../styles/shared.css"
import '../../styles/category.css';

const Products = () => {
    const [records, setRecord] = useState([]);
    const [show, setShow] = useState(true);
    const [alertType, setAlert] = useState("warning");
    const [autoId, setId] = useState(10000);
    const [searchId, setSearchId] = useState();

    return (
        <div className="dark-background-body" >
            <Header />

            <ProductNav navSwitch={"Register"} />

            <div>
                <Container>
                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={12}>
                            <InputForm pageSwitch={"Register"}
                                records={records}
                                setRecord={setRecord}
                                setShow={setShow}
                                setAlert={setAlert}
                                autoId={autoId}
                                setId={setId}
                                searchId={searchId}
                                setSearchId={setSearchId} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Alerts show={show}
                                setShow={setShow}
                                alertType={alertType}
                                autoId={autoId} />
                        </Col>

                    </Row>

                    <Row className="d-flex justify-content-center mb-3">
                        <Col xs={12}>
                            <ProductTable records={records} searchId={searchId} />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )

}
export default Products