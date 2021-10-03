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
        <div>
            <Col xs={"auto"}>
                <Form.Label>Valor unitario</Form.Label>
                <Form.Control id="price-input" className={missed} onChange={saveValue} type="number" placeholder="Valor unitario ($COP)" />
            </Col >
        </div>
    )

}

export default Price;