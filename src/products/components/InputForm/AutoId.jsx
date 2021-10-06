import { Form, Col } from "react-bootstrap"

const AutoId = (props) => {
    const { setSearch } = props;
    const saveValue = (event) => {
        setSearch(event.target.value)
    }

    return (

        <Col xs={6}>
            <Form.Label>Filtrar</Form.Label>
            <Form.Control onChange={saveValue} type="text" placeholder="Por ID o Descripción" />
        </Col >
    )
}

export default AutoId;