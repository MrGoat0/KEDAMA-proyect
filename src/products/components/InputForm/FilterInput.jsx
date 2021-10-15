import { Form, Col, Button } from "react-bootstrap"
import { useState } from "react"
import api from "../../../api";

const Filter = (props) => {
    const { search, setSearch, setRecord, setCount, setPage } = props;
    const [btnText, setBtnText] = useState("Filtrar")

    const saveValue = (event) => {
        setSearch(event.target.value)
    }

    // GET by id or description
    const sendSearch = async () => {

        if (btnText === "Filtrar") {
            const response = await api.products.filter(search);
            setRecord(response)
            setPage(1)
            setBtnText("Deshacer")
        } else {
            setBtnText("Filtrar")
            window.location.reload()

        }
    }

    const resetFilter = () => {
        setBtnText("Filtrar")
    }

    return (
        <Col className="d-flex justify-content-between filter-row">
            <Form.Control className="mr-2" id="filter-input"
                onChange={saveValue}
                onClick={resetFilter}
                type="text"
                placeholder="Por ID o descripción" />
            <Button className="filter-btn" id="filter-btn" onClick={sendSearch}>{btnText}</Button>
        </Col>
    )
}

export default Filter;