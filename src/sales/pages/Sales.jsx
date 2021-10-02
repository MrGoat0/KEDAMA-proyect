import React from "react";
import Header from "../../shared/Header.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../styles/sales.css';
const Sales = () => {
return(
    <div>
        <Header/>
        <div className="container-sales">
            <Col>
            <Row>
                <h1>Registro de ventas</h1> 
            </Row>
            </Col>
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>

        </div>


    </div>
)

}
export default Sales