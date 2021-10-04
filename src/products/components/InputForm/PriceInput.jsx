import { Form, Col } from "react-bootstrap";

const Price = (props) => {
    const { setPrice, missingInput } = props;

    if (missingInput) {
        var missed = "missing-cell"
    } else {
        var missed = ""
    }

    const saveValue = (event) => {
        setPrice(event.target.value)
    }

    return (

        <Col xs={6}>
            <Form.Label>Valor unitario</Form.Label>
            <Form.Control id="price-input" className={missed} onChange={saveValue} type="number" placeholder="Valor unitario ($COP)" />
        </Col >
    )

}

export default Price;