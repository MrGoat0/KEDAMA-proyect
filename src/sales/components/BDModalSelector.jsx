import SalesTable from "./TableWithSales";
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const BDModalSelector = ({type,products,users,handleRecord}) =>{
    if (type === 'usuario'){
        return(
            <div>

            <Table striped bordered hover id="users-table">
                <SalesTable recordsData={users} type={type}/>
            </Table>
            <div>
            <Row>
            <Col md={5}>
            <InputGroup size="default">
                <Col md={3}>
                <h4 className="fs-4"><strong> ID : </strong></h4>
                </Col>
                <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleRecord}
                />
            </InputGroup>
            </Col>
        </Row>
        </div>
            </div>
            
        )
    }else if (type === 'producto'){
        return(
            <div>
            <Table striped bordered hover>
                <SalesTable recordsData={products} type={type}/>
            </Table>
            <div>
            <Row>
            <Col md={5}>
            <InputGroup size="default">
                <Col md={3}>
                <h4 className="fs-4"><strong> ID : </strong></h4>
                </Col>
                <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={handleRecord}
                />
            </InputGroup>
            </Col>
        </Row>
        </div>
            </div>
        )
    }
}

BDModalSelector.propTypes = {
    type: PropTypes.string,products: PropTypes.array
}

export default BDModalSelector;