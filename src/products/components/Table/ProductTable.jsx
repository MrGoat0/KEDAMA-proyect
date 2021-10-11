import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {

    const { records, search, info, setInfo, searchDescription } = props;

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    var filteredRecords = records.filter((item) => item.id.toString().includes(search.trim()) ||
        removeAccents(item.description.toLowerCase())
            .includes(removeAccents(search.toLowerCase().trim())));

    if (filteredRecords.length > 0) {
        var rows = filteredRecords
    } else {
        rows = []
    }
    if (searchDescription) {
        filteredRecords = records.find((item) => item.description === searchDescription);
        if (filteredRecords) {

            const inLoc = records.indexOf(filteredRecords);
            var searchFirst = [...records]
            searchFirst.splice(inLoc, 3)
            var rows = [filteredRecords, ...searchFirst]

        } else {
            rows = [...records]
        }

    } else {
        rows = [...records]
    }
    return (
        <Table className="table"
            size="sm"
            variant="light"
            responsive="sm"
            striped bordered hover>
            <TableHeader />
            <TableBody records={rows}
                info={info}
                setInfo={setInfo} />
        </Table>

    )
}

export default ProductTable;