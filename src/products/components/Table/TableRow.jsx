import { Button } from "react-bootstrap"

const TableRow = (props) => {
    const { row, properties } = props;
    const { setSearch, info, setInfo, action, setAction } = properties;

    const rowPicked = (event) => {
        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state

        setInfo({
            _id: row._id,
            id: info.id,
            description: row.description,
            price: row.price,
            state: row.state
        })
    }

    const updateActivation = () => {
        if (action) {
            setAction(false)
            document.getElementById("filter-input").value = ""
            setSearch(row.id.toString())
        } else {
            setAction(true)
            setSearch("")
        }
    }

    return (
        <tr onClick={rowPicked}>
            <td>{row.id}</td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.state}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <Button className="action-buttons ml-1" variant="outline-danger">✖</Button>
                    <Button id="updateBtn" className="action-buttons ml-2" onClick={updateActivation}
                        variant="primary"> 🖊 </Button>
                </div>

            </td>
        </tr>
    )
}

export default TableRow;