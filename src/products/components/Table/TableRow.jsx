import { Button, Row } from "react-bootstrap"

const TableRow = (props) => {
    const { row, search, info, setInfo } = props;

    if (search) {
        if (search.id === row.id)
            var color = "#008891"
    } else {
        color = ""
    }

    const rowPicked = (event) => {
        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state

        setInfo({ id: info.id, description: row.description, price: row.price, state: row.state })
    }

    return (
        <tr onClick={rowPicked}>
            <td bgcolor={color}>{row.id}</td>
            <td bgcolor={color}>{row.description}</td>
            <td bgcolor={color}>{row.price}</td>
            <td bgcolor={color}>{row.state}</td>
            <td bgcolor={color}>
                <div className="d-flex justify-content-center">
                    <Button className="action-buttons" variant="outline-danger">✖</Button>
                    <Button className="action-buttons ml-1" variant="outline-success">✏</Button>
                </div>

            </td>
        </tr>
    )
}

export default TableRow;