import { Form, Col } from "react-bootstrap"

const FilterString = (props) => {
    const { setsearchDescription } = props;

    const saveValue = (event) => {
        setsearchDescription(event.target.value)
    }

    return (

        <Col xs={2}>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control onChange={saveValue} type="text" placeholder="Filtrar por descripción" />
        </Col >
    )
}

export default FilterString;