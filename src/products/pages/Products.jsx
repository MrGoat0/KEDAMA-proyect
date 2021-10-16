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
    // action: enables update button
    const [records, setRecord] = useState([]);
    const [info, setInfo] = useState({ id: null, description: "", price: "", state: "" });
    const [missing, setMissing] = useState({ description: false, price: false, state: false });
    const [search, setSearch] = useState("");
    const [action, setAction] = useState(false)
    const [modalSettings, setModalSettings] = useState({ show: false, type: "" })
    const [countRecords, setCount] = useState()
    const [page, setPage] = useState(1)
    const [filterState, setFilterState] = useState("Filtrar")


    // GET info request
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await api.products.info();
            info.id = response.maxId;
            setCount(response.count)
        };
        fetchInfo()
    }, [info]);

    // // GET sliced data request
    useEffect(() => {
        const fetchSlice = async () => {
            const response = await api.products.slice(page);
            setRecord(response);
        };
        fetchSlice()
        console.log(records)
    }, [page]);

    // GET (all) request
    // useEffect(() => {
    //     const fetchGetAll = async () => {
    //         const response = await api.products.list();
    //         const sortedRecords = response.sort((a, b) => a.id - b.id)
    //         setRecord(sortedRecords);
    //     };
    //     fetchGetAll()
    // }, [info]);

    return (
        <div className="container-Category" >

            <Header headerText={"Gestión de productos"} />

            <div className="simple-text mt-3 mb-3">
                <span className="just-font">Registre y gestione los productos diligenciando la descripción,
                    valor unitario y el estado de disponibilidad.
                </span>
            </div>

            <Container fluid="xl">

                <Row className="d-flex justify-content-center just-font">
                    <Col>
                        <Row className="d-flex justify-content-center just-font">
                            <InputForm
                                info={info}
                                setInfo={setInfo}
                                setRecord={setRecord}
                                search={search}
                                setSearch={setSearch}
                                missing={missing}
                                setMissing={setMissing}
                                action={action}
                                modalSettings={modalSettings}
                                setModalSettings={setModalSettings}
                                filterState={filterState}
                                setFilterState={setFilterState} />
                        </Row>
                    </Col>
                    <Col xs={8} className="just-font">
                        <Row className="d-flex justify-content-center just-font">
                            <ProductTable
                                records={records}
                                info={info}
                                setInfo={setInfo}
                                setAction={setAction}
                                setMissing={setMissing} />
                        </Row>
                        <Row className="d-flex justify-content-between pagination-buttons">
                            <Pagination
                                countRecords={countRecords}
                                page={page}
                                setPage={setPage}
                                filterState={filterState}
                                setFilterState={setFilterState} />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div >
    )

}
export default Products