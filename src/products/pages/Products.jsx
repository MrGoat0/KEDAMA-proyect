import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import ProductNav from "../../shared/ProductNav.jsx";
import Alerts from "../components/InputForm/Alerts.jsx";
import React, { useState } from "react";
import "../../styles/shared.css"
import '../../styles/category.css';

const Products = () => {
    const [records, setRecord] = useState([]);
    const [alert, setAlert] = useState({ show: false, type: "danger" });
    const [autoId, setId] = useState(10000);
    const [searchId, setSearchId] = useState();
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");

    return (
        <div className="container-Category" >

            <Header headerText={"Registro de productos"} />

            <ProductNav navSwitch={"Register"} page={"products"} />

            <Container className="dark-background-body">

                <Row className="mb-4">
                    <span>Registre productos diligenciando su descripción,
                        valor unitario y estado de disponibilidad.</span>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col>
                        <Row>
                            <InputForm description={description}
                                setDescription={setDescription}
                                price={price}
                                setPrice={setPrice}
                                state={state}
                                setState={setState}
                                records={records}
                                setRecord={setRecord}
                                setAlert={setAlert}
                                autoId={autoId}
                                setId={setId}
                                setSearchId={setSearchId} />
                        </Row>
                        <Row className="d-flex justify-content-center mt-3">
                            <Alerts alert={alert}
                                setAlert={setAlert}
                                autoId={autoId} />
                        </Row>
                    </Col>


                    <Col className="d-flex justify-content-center ml-2 mt-3">
                        <Row >
                            <ProductTable records={records}
                                searchId={searchId}
                                setDescription={setDescription}
                                setPrice={setPrice}
                                setState={setState} />
                        </Row>
                    </Col>
                </Row>



            </Container>


            {/* <Container className="dark-background-body">
                <Row className="d-flex justify-content-center mb-3">
                    <Col xs={12}>
                        <InputForm description={description}
                            setDescription={setDescription}
                            price={price}
                            setPrice={setPrice}
                            state={state}
                            setState={setState}
                            pageSwitch={"Register"}
                            records={records}
                            setRecord={setRecord}
                            setShow={setShow}
                            setAlert={setAlert}
                            autoId={autoId}
                            setId={setId}
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
                        <ProductTable records={records}
                            searchId={searchId}
                            setDescription={setDescription}
                            setPrice={setPrice}
                            setState={setState} />
                    </Col>
                </Row>
            </Container> */}

            <Footer />
        </div>
    )

}
export default Products