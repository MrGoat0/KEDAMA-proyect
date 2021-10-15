import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {
    const { records, search, setSearch, info, setInfo, action, setAction } = props;

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Filter out the records that match an id or description
    var filteredRecords = records.filter((item) => item.id.toString().includes(search.trim()) ||
        removeAccents(item.description.toLowerCase())
            .includes(removeAccents(search.toLowerCase().trim())));

    if (filteredRecords.length > 0) {
        var rows = filteredRecords
    } else {
        rows = []
    }

    return (
        <Table className="table"
            size="sm"
            variant="light"
            responsive="sm"
            striped bordered hover>
            <TableHeader />
            <TableBody records={rows}
                setSearch={setSearch}
                info={info}
                setInfo={setInfo}
                action={action}
                setAction={setAction} />
        </Table>

    )
}

export default ProductTable;