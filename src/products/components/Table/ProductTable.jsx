import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";

const ProductTable = (props) => {
    return (
        <Table className="table"
            size="sm"
            variant="light"
            responsive="sm"
            striped bordered hover>
            <TableHeader />
            <TableBody
                properties={props}
            />
        </Table>
    )
}

export default ProductTable;