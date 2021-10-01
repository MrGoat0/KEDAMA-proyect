import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {

    const { records, searchId } = props;


    console.log("searchId = " + searchId)
    if (searchId) {
        const filteredRecords = records.find((item) => item.id === parseInt(searchId));
        console.log("filteredRecords = " + filteredRecords)
        if (filteredRecords) {
            var rows = [filteredRecords]
            console.log("filteredRecords = " + filteredRecords)
        } else {
            var rows = [...records]
            console.log("filteredRecords = " + filteredRecords)
        }

    } else {
        var rows = [...records]
        console.log("filteredRecords : undefined ")
    }

    return (
        <Table className="table" size="sm" striped bordered hover variant="dark">
            <TableHeader isEmpty={rows.length === 0} />
            <TableBody records={rows} />
        </Table>

    )
}

export default ProductTable;