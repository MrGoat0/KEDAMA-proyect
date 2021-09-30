import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { setDescription } = props;
    const saveValue = (event) => {
        setDescription(event.target.value);
    }

    return (
        <Col>
            <Form.Control onChange={saveValue} type="text" placeholder="Producto" />
        </Col>
    )
}

export default Product;