import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import Alerts from "../components/InputForm/Alerts.jsx";
import React, { useState, useEffect } from "react";
import "../../styles/shared.css"
import '../../styles/category.css';
import api from "../../api";

const Products = () => {
    const [records, setRecord] = useState([]);
    const [info, setInfo] = useState({ id: 0, description: "", price: "", state: "" });
    const [alert, setAlert] = useState({ show: false, type: "" });
    const [search, setSearch] = useState("");

    const fetchGetAll = async () => {
        const response = await api.products.list();
        const sortedRecords = response.sort((a, b) => a.id - b.id)
        setRecord(sortedRecords);
        info.id = sortedRecords[sortedRecords.length - 1].id
    };

    useEffect(() => {
        fetchGetAll()
    }, []);

    return (
        <div className="container-Category" >

            <Header headerText={"Gestión de productos"} />

            <Container className="mt-5 simple-text">
                <span>Registre productos diligenciando la descripción,
                    valor unitario y el estado de disponibilidad.
                </span>
            </Container>

            <Container className="dark-background-body mt-4">

                <Row className="d-flex justify-content-center">
                    <Col xs={5}>
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
                    <Col xs={7} className="d-flex justify-content-center mt-3">
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