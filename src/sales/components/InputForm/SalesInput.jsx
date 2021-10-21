import { Form, Col } from "react-bootstrap"

const Sales = (props) => {
    const { setDescription } = props;

    const saveValue = (event) => {
        setDescription(event.target.value)
    }

    return (
        <Col xs={3}>
            <Form.Control onChange={saveValue} type="text" placeholder="Describir Venta" />
        </Col>
    )
}
export default Sales;