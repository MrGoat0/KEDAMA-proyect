import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {
    const { records } = props;
    return (
        <Table size="sm" striped bordered hover variant="dark">
            <TableHeader />
            <TableBody records={records} />
        </Table>

    )
}

export default ProductTable;