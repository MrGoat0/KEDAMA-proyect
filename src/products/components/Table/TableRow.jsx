import { Button, Row, Col } from "react-bootstrap";

const TableRow = (props) => {
    const { row, search } = props;

    if (search) {
        if (search.id === row.id)
            var color = "#008891"
    } else {
        var color = ""
    }

    return (
        <tr>
            <td bgcolor={color}>{row.id}</td>
            <td bgcolor={color}>{row.description}</td>
            <td bgcolor={color}>{row.price}</td>
            <td bgcolor={color}>{row.state}</td>
            <td bgcolor={color}>
                <div>
                    <Button className="action-buttons ml-2" variant="outline-danger">✖</Button>
                    <Button className="action-buttons ml-2" variant="outline-success">✏</Button>
                </div>


            </td>
        </tr>
    )
}

export default TableRow;