import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { setDescription } = props;

    const saveValue = (event) => {
        setDescription(event.target.value)
    }

    return (
        <Col xs={3}>
            <Form.Control onChange={saveValue} type="text" placeholder="Descripción del producto" />
        </Col>
    )
}

export default Product;