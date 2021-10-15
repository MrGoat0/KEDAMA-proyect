import { Button } from "react-bootstrap"

const TableRow = (props) => {
    const { row, properties } = props;
    const { info, setInfo, setAction, setMissing } = properties.properties;

    const updateActivation = () => {

        setAction(true)
        document.getElementById("product-input").value = row.description
        document.getElementById("price-input").value = row.price
        document.getElementById("state-input").value = row.state
        document.getElementById("filter-input").value = row.id

        setInfo({
            _id: row._id,
            id: info.id,
            description: row.description,
            price: row.price,
            state: row.state
        })
        setMissing({ description: false, price: false, state: false })
    }

    return (
        <tr id={row.id}>
            <td >{row.id}</td>
            <td >{row.description}</td>
            <td >{row.price}</td>
            <td >{row.state}</td>
            <td >
                <div className="d-flex justify-content-center">
                    <Button className="action-buttons ml-1" variant="outline-danger">✖</Button>
                    <Button id={"updateBtn-" + row.id}
                        className="action-buttons ml-2"
                        onClick={updateActivation}
                        variant="primary"> 🖊 </Button>
                </div>

            </td>
        </tr>
    )
}

export default TableRow;