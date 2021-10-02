import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { setDescription, missingInput } = props;

    const saveValue = (event) => {
        setDescription(event.target.value)
    }

    if (missingInput) {
        return (
            <Col xs={3}>
                <Form.Control className="missing-cell" onChange={saveValue} type="text" placeholder="Descripción del producto" />
            </Col>
        )

    } else {
        return (
            <Col xs={3}>
                <Form.Control onChange={saveValue} type="text" placeholder="Descripción del producto" />
            </Col>
        )
    }
}

export default Product;