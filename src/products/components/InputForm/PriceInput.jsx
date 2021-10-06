import { Form, Col } from "react-bootstrap";

const Price = (props) => {
    const { info, setInfo, missingInput } = props;

    if (missingInput) {
        var missed = "missing-cell"
    } else {
        missed = ""
    }

    const saveValue = (event) => {
        info.price = event.target.value
        setInfo(info)
    }

    return (

        <Col xs={6}>
            <Form.Label>Precio</Form.Label>
            <Form.Control id="price-input" className={missed} onChange={saveValue} type="number" placeholder="Precio unitario" />
        </Col >
    )

}

export default Price;