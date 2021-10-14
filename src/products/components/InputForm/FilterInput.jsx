import { Form, Col } from "react-bootstrap"

const Filter = (props) => {
    const { setSearch } = props;
    const saveValue = (event) => {
        setSearch(event.target.value)
    }

    return (

        <Col>
            <Form.Label>Filtrar</Form.Label>
            <Form.Control id="filter-input"
                onChange={saveValue} type="text"
                placeholder="Por ID o descripción" />
        </Col >
    )
}

export default Filter;