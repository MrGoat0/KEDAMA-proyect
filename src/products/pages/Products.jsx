import { Container, Row, Col } from "react-bootstrap";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer.jsx";
import InputForm from "../components/InputForm/InputForm.jsx";
import ProductTable from "../components/Table/ProductTable.jsx";
import Pagination from "../components/Table/Pagination.jsx";
import React, { useState, useEffect } from "react";
import "../../styles/shared.css"
import '../../styles/category.css';
import '../../styles/products.css';
import api from "../../api";

const Products = () => {

    // records: list of products, info: current inputs, search: id/description input
    // missing: defines missing fields at register/update
    // countRecords: number of documents/records and maxId
    const [records, setRecord] = useState([]);
    const [info, setInfo] = useState({ id: null, description: "", price: "", state: "" });
    const [missing, setMissing] = useState({ description: false, price: false, state: false });
    const [countRecords, setCount] = useState({ count: undefined, maxId: undefined })
    const [page, setPage] = useState(1)
    const [filterState, setFilterState] = useState("Filtrar")
    const [refreshTable, setRefreshTable] = useState(false)

    // GET info request
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await api.products.info();
            setCount(response)
        };
        fetchInfo()

    }, [info, refreshTable, page]);

    // // GET sliced data request
    useEffect(() => {
        const fetchSlice = async () => {
            const response = await api.products.slice(page);
            setRecord(response);
        };
        fetchSlice()
    }, [page, refreshTable]);

    return (
        <div className="container-Category" >

            <Header headerText={"Gestión de productos"} />

            <div className="d-flex simple-text justify-content-between mt-3 mb-3">
                <span className="just-font">Registre y gestione los productos diligenciando la descripción,
                    valor unitario y el estado de disponibilidad.
                </span>
                {/* <span className="just-font mr-5">Recargar tabla</span> */}
            </div>

            <Container fluid="xl">

                <Row className="d-flex justify-content-center just-font">
                    <Col className="sticky">
                        <Row className="d-flex justify-content-center just-font">
                            <InputForm
                                info={info}
                                setInfo={setInfo}
                                setRecord={setRecord}
                                missing={missing}
                                setMissing={setMissing}
                                filterState={filterState}
                                setFilterState={setFilterState}
                                countRecords={countRecords}
                                refreshTable={refreshTable}
                                setRefreshTable={setRefreshTable} />
                        </Row>
                    </Col>
                    <Col xs={8} className="just-font">
                        <Row className="d-flex justify-content-center just-font">
                            <ProductTable
                                records={records}
                                setInfo={setInfo}
                                setMissing={setMissing}
                                refreshTable={refreshTable}
                                setRefreshTable={setRefreshTable} />
                        </Row>
                        <Row className="d-flex justify-content-between pagination-buttons">
                            <Pagination
                                countRecords={countRecords}
                                page={page}
                                setPage={setPage}
                                filterState={filterState} />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div >
    )

}
export default Products