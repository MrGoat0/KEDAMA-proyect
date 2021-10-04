import { Form, Col } from "react-bootstrap"

const Product = (props) => {
    const { setDescription } = props;

    const saveValue = (event) => {
        setDescription(event.target.value)
    }

    return (
        <Col xs={3}>
            <Form.Control onChange={saveValue} type="text" placeholder="Sales" />
        </Col>
    )
}

export default Sales;