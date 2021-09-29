import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import { ListGroup } from "react-bootstrap";

const ProductTable = () => {

    return (
        <Table size="sm" striped bordered hover variant="dark">
            <TableHeader />
            <TableBody />
        </Table>

    )
}

export default ProductTable;