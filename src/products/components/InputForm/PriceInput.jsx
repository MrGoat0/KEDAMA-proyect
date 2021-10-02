import { Form, Col } from "react-bootstrap";

const Price = (props) => {
    const { setPrice, missingInput } = props;

    const saveValue = (event) => {
        setPrice(event.target.value)
    }
    if (missingInput) {
        return (
            <Col xs="auto">
                <Form.Control className="missing-cell" onChange={saveValue} type="number" placeholder="Valor unitario ($COP)" />
            </Col >
        )
    } else {
        return (
            <Col xs="auto">
                <Form.Control onChange={saveValue} type="number" placeholder="Valor unitario ($COP)" />
            </Col >
        )
    }

}

export default Price;