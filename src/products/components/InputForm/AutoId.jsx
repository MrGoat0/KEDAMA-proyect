import { Form, Col } from "react-bootstrap"

const AutoId = (props) => {
    const { setSearchId } = props;
    const saveValue = (event) => {
        setSearchId(event.target.value)
    }

    return (
        <Col xs={2}>
            <Form.Control onChange={saveValue} type="number" placeholder="Filtrar por ID" />
        </Col >
    )
}

export default AutoId;