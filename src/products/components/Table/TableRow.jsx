// import React from "react";
import Button from "react-bootstrap/Button"

const TableRow = (props) => {
    const { row, search, setDescription, setPrice, setState } = props;

    if (search) {
        if (search.id === row.id)
            var color = "#008891"
    } else {
      color = ""
    }

    const rowPicked = (event) => {
        document.getElementById("product-input").value = row.description
        setDescription(row.description)

        document.getElementById("price-input").value = row.price
        setPrice(row.price)

        document.getElementById("state-input").value = row.state
        setState(row.state)
    }
    const deleteThis = () => {
       row.id="542"
       console.log(delete row.id); // Elimino el 'precio' 
       console.log(delete row.description);
       console.log(delete row.price);
       console.log(delete row.state);
       console.log(row)
    }

    return (
        <tr onClick={rowPicked}>
            <td bgcolor={color}>{row.id}</td>
            <td bgcolor={color}>{row.description}</td>
            <td bgcolor={color}>{row.price}</td>
            <td bgcolor={color}>{row.state}</td>
            <td bgcolor={color}>
                <div>
                    <Button onClick={deleteThis} className="action-buttons ml-2" variant="outline-danger">✖</Button>
                    <Button className="action-buttons ml-2" variant="outline-success">✏</Button>
                </div>


            </td>
        </tr>
    )
}

export default TableRow;