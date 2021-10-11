import { Button } from "react-bootstrap"

const TableRow = (props) => {
    const { row, info, setInfo } = props;

    const rowPicked = (event) => {

        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state

        setInfo({
            id: info.id,
            description: row.description,
            price: row.price,
            state: row.state
        })
    }

    return (
        <tr onClick={rowPicked}>
            <td>{row.id}</td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.state}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <Button className="action-buttons" variant="outline-danger">✖</Button>
                    <Button className="action-buttons ml-1" variant="outline-success">✏</Button>
                </div>

            </td>
        </tr>
    )
}

export default TableRow;