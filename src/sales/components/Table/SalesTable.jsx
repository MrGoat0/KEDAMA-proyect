import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const SalesTable = (props) => {

    const { records, searchId } = props;
    if (searchId) {
        var filteredRecords = records.find((item) => item.id === parseInt(searchId));
        if (filteredRecords) {
            const inLoc = records.indexOf(filteredRecords);
            var searchFirst = [...records]
            searchFirst.splice(inLoc, 1)
            var rows = [filteredRecords, ...searchFirst]
        } else {
            var rows = [...records]
        }

    } else {
        var rows = [...records]
    }

    return (
        <Table className="table" size="sm" striped bordered hover variant="dark">
            <TableHeader isEmpty={rows.length === 0} />
            <TableBody records={rows} search={filteredRecords} />
        </Table>

    )
}

export default SalesTable;