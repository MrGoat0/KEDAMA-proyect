// import React from "react";
import Button from "react-bootstrap/Button"

const TableRow = (props) => {
    const { row, search, setDescription, setPrice, setState } = props;

    if (search) {
        if (search.id === row.id)
            var color = "#008891"
    } else {
        var color = ""
    }

    const rowPicked = (event) => {
        document.getElementById("product-input").value = row.description
        setDescription(row.description)

        document.getElementById("price-input").value = row.price
        setPrice(row.price)

        document.getElementById("state-input").value = row.state
        setState(row.state)
    }

    return (
        <tr onClick={rowPicked}>
            <td bgcolor={color}>{row.id}</td>
            <td bgcolor={color}>{row.description}</td>
            <td bgcolor={color}>{row.price}</td>
            <td bgcolor={color}>{row.state}</td>
            {/* <td bgcolor={color}>
                <div>
                    <Button className="action-buttons ml-2" variant="outline-danger">✖</Button>
                    <Button className="action-buttons ml-2" variant="outline-success">✏</Button>
                </div>


            </td> */}
        </tr>
    )
}

export default TableRow;