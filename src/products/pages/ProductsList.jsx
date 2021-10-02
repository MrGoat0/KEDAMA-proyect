import React from "react";
const ProductsList = () => {
<<<<<<< HEAD
    const [records, setRecord] = useState([]);

    return (
        <div className="dark-background-body" >
            <Header />
            {/* <Header headerTitle={"Actualización de productos"} /> */}

            <ProductNav navSwitch={"Management"} />

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
=======
return(
    <div>
        Esto es lista de productos
    </div>
)
>>>>>>> 3e81b1aa241a8e0992f33db002ad170015c2755c

}
export default ProductsList