import React from "react";
const Products = () => {
<<<<<<< HEAD
    const [records, setRecord] = useState([]);
    const [show, setShow] = useState(true);
    const [alertType, setAlert] = useState("danger");
    const [autoId, setId] = useState(10000);
    const [searchId, setSearchId] = useState();

    return (
        <div className="dark-background-body" >
            <Header />
            {/* <Header headerTitle={"Registro de productos"} /> */}

            <ProductNav navSwitch={"Register"} />


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

            <Footer />
        </div>
    )
=======
return(
    <div>
        Esto es registro de productos
    </div>
)
>>>>>>> 3e81b1aa241a8e0992f33db002ad170015c2755c

}
export default Products