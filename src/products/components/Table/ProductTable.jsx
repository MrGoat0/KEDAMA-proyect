import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {

    const { records, searchId, info, setInfo } = props;

    var filteredRecords = records.filter((item) => item.id === parseInt(searchId));
    if (filteredRecords.length > 0) {
        // const inLoc = records.indexOf(filteredRecords);
        // var searchFirst = [...records]
        // searchFirst.splice(inLoc, 1)
        var rows = filteredRecords
    } else {
        rows = [...records]
    }

    return (
        <Table className="table" size="sm" striped bordered hover variant="dark" responsive="sm">
            <TableHeader isEmpty={rows.length === 0} />
            <TableBody records={rows}
                info={info}
                setInfo={setInfo} />
        </Table>

    )
}

export default ProductTable;