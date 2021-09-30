import { Form, Col } from "react-bootstrap";

const Price = (props) => {
    const { setPrice } = props;
    const saveValue = (event) => {
        setPrice(event.target.value);
    }
    return (
        <Col>
            <Form.Control onChange={saveValue} type="text" placeholder="Valor unitario ($COP)" />
        </Col>
    )
}

export default Price;