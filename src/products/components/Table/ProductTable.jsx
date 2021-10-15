import { Table } from "react-bootstrap";
import TableHeader from "./TableHeader.jsx";
import TableBody from "./TableBody.jsx";
import { useState } from "react"

const ProductTable = (props) => {
    const { records } = props;
    const [rowColor, setRowColor] = useState("")

    return (
        <Table className="table"
            size="sm"
            variant="light"
            responsive="sm"
            striped bordered hover>
            <TableHeader />
            <TableBody
                records={records}
                properties={props}
                rowColor={rowColor}
                setRowColor={setRowColor}
            />
        </Table>

    )
}

export default ProductTable;