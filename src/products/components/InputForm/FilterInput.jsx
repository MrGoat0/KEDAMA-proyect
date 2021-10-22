import { Form, Col } from "react-bootstrap"
import api from "../../../api";
import { useState } from "react"

const Filter = (props) => {
    const { setRecord, filterState, setFilterState,
        refreshTable, setRefreshTable } = props.properties;

    const [search, setSearch] = useState("");

    const saveValue = async (event) => {
        setSearch(event.target.value)
    }

    // GET by id or description
    const sendSearch = async () => {

        if (filterState === "Filtrar") {
            if (search !== "") {
                const response = await api.products.filter(search);
                setRecord(response)
                setFilterState("No filtrar")
            }
        } else {
            setFilterState("Filtrar")
            setRefreshTable(!refreshTable)
        }
    }

    return (
        <Col className="d-flex justify-content-between filter-row">
            <Form.Control className="mr-2" id="filter-input"
                onChange={saveValue}
                type="text"
                placeholder="Por ID o descripción" />
            <button className="filterbtn"
                id="filter-btn"
                onClick={sendSearch}>{filterState}</button>
        </Col>
    )
}

export default Filter;