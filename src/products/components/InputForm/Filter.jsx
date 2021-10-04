import { Button, Col } from "react-bootstrap";


const Filter = (props) => {
    const { records, searchId, setSearchId, setAlert, setShow } = props;


    const handleClic = (event) => {
        const filteredRecords = records.find((item) => item.id === parseInt(searchId));
        if (filteredRecords) {
            setShow(false)
            setSearchId(filteredRecords.id)

        } else {
            setSearchId()
            setShow(true)
            setAlert("danger")
        }
    }

    return (
        <Col xs="auto">
            <Button className="form-input-buttons" onClick={handleClic} variant="primary">Filtrar</Button>
        </Col >
    )
}

export default Filter;