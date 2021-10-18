import { Form, Col } from "react-bootstrap"
import api from "../../../api";

const Filter = (props) => {
    const { search, setSearch, setRecord, filterState, setFilterState } = props.properties;


    const saveValue = (event) => {
        setSearch(event.target.value)
    }

    // GET by id or description
    const sendSearch = async () => {

        if (filterState === "Filtrar") {
            const response = await api.products.filter(search);
            setRecord(response)
            setFilterState("No filtrar")
        } else {
            setFilterState("Filtrar")
            window.location.reload()

        }
    }

    // const resetFilter = () => {
    //     setFilterState("Filtrar")
    // }

    return (
        <Col className="d-flex justify-content-between filter-row">
            <Form.Control className="mr-2" id="filter-input"
                onChange={saveValue}
                // onClick={resetFilter}
                type="text"
                placeholder="Por ID o descripción" />
            <button className="filterbtn"
                id="filter-btn"
                onClick={sendSearch}>{filterState}</button>
        </Col>
    )
}

export default Filter;