import { Button, Col } from "react-bootstrap";
import { useState } from "react"

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

<<<<<<< HEAD

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

=======
>>>>>>> 6368ddb49a00fa2c0e583ab93d82d089cdd7e411
    return (
        <Col xs="auto">
            <Button className="form-input-buttons" onClick={handleClic} variant="primary">Filtrar</Button>
        </Col >
    )
}

export default Filter;