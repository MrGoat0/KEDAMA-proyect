import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { info, setInfo, missingInput } = props;

    if (missingInput) {
        var missed = "missing-cell"
    } else {
        missed = ""
    }

    const saveValue = (event) => {
        info.description = event.target.value
        setInfo(info)
    }
    return (
        <Col xs={6}>
            <Form.Label>
                Producto
            </Form.Label>
            <Form.Control id="product-input" className={missed} onChange={saveValue} type="text" placeholder="Descripción del producto" />
        </Col>
    )
}

export default Product;