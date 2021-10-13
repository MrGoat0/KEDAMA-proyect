import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import React, { useState, useEffect } from "react";
import "../../styles/shared.css"
import '../../styles/category.css';
import '../../styles/products.css';
import api from "../../api";

const Products = () => {

    // records: list of products, info: current inputs, search: id/description input
    // action: enables update button
    const [records, setRecord] = useState([]);
    const [info, setInfo] = useState({ id: null, description: "", price: "", state: "" });
    const [search, setSearch] = useState("");
    const [action, setAction] = useState(true)
    const [modalSettings, setModalSettings] = useState({ show: false, type: "" })

    // GET (all) request
    useEffect(() => {
        const fetchGetAll = async () => {
            const response = await api.products.list();
            const sortedRecords = response.sort((a, b) => a.id - b.id)
            setRecord(sortedRecords);
            info.id = sortedRecords[sortedRecords.length - 1].id
        };
        fetchGetAll()
    }, []);

    return (
        <div className="container-Category" >

            <Header headerText={"Gestión de productos"} />

            <div className="simple-text">
                <span>Registre y gestione los productos diligenciando la descripción,
                    valor unitario y el estado de disponibilidad.
                </span>
            </div>

            <Container fluid="xl" className="dark-background-body mt-4">

                <Row className="d-flex justify-content-center">
                    <Col >
                        <Row className="d-flex justify-content-center">
                            <InputForm
                                records={records}
                                setRecord={setRecord}
                                info={info}
                                setInfo={setInfo}
                                search={search}
                                setSearch={setSearch}
                                action={action}
                                setAction={setAction}
                                modalSettings={modalSettings}
                                setModalSettings={setModalSettings} />
                        </Row>
                    </Col>
                    <Col xs={8} className="mt-3">
                        <Row className="d-flex justify-content-center">
                            <ProductTable
                                records={records}
                                search={search}
                                setSearch={setSearch}
                                info={info}
                                setInfo={setInfo}
                                action={action}
                                setAction={setAction} />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div >
    )

}
export default Products