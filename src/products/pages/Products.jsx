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
    const [info, setInfo] = useState({ id: 10000, description: "", price: "", state: "" });
    const [alert, setAlert] = useState({ show: false, type: "" });
    const [search, setSearch] = useState("");

    return (
        <div className="container-Category" >

            <Header headerText={"Registro de productos"} />

            <ProductNav navSwitch={"Register"} page={"products"} />

            <Container className="simple-text">
                <span>Registre productos diligenciando la descripción,
                    valor unitario y el estado de disponibilidad.
                </span>
            </Container>

            <Container className="dark-background-body mt-4">

                <Row className="d-flex justify-content-center">
                    <Col xs={5} span={true}>
                        <Row>
                            <InputForm
                                records={records}
                                setRecord={setRecord}
                                info={info}
                                setInfo={setInfo}
                                setAlert={setAlert}
                                setSearch={setSearch} />
                        </Row>
                        <Row className="d-flex justify-content-center mt-2">
                            <Alerts alert={alert}
                                setAlert={setAlert}
                                id={info.id} />
                        </Row>
                    </Col>
                    <Col xs={7} className="d-flex justify-content-center mt-3" span={true}>
                        <Row >
                            <ProductTable records={records}
                                search={search}
                                info={info}
                                setInfo={setInfo} />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )

}
export default Products