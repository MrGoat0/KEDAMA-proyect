import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { setDescription, missingInput } = props;

    if (missingInput) {
        var missed = "missing-cell"
    } else {
       missed = ""
    }

    const saveValue = (event) => {
        setDescription(event.target.value)
    }
    return (
        <Col xs={3}>
            <Form.Label>
                Producto
            </Form.Label>
            <Form.Control id="product-input" className={missed} onChange={saveValue} type="text" placeholder="Descripción del producto" />
        </Col>
    )
}

export default Product;