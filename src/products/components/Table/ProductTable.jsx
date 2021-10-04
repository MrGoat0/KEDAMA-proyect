import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {

    const { records, searchId, info, setInfo } = props;

    var filteredRecords = records.find((item) => item.id === parseInt(searchId));
    if (filteredRecords) {
        const inLoc = records.indexOf(filteredRecords);
        var searchFirst = [...records]
        searchFirst.splice(inLoc, 1)
        var rows = [filteredRecords, ...searchFirst]
    } else {
        rows = [...records]
    }

    return (
        <Table className="table" size="sm" striped bordered hover variant="dark" responsive="sm">
            <TableHeader isEmpty={rows.length === 0} />
            <TableBody records={rows}
                search={filteredRecords}
                info={info}
                setInfo={setInfo} />
        </Table>

    )
}

export default ProductTable;