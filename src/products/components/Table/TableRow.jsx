import { Button } from "react-bootstrap"
import api from "../../../api";
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
    const deleteActivation = async (e) => {
      
        if (action) {
           
            const response=await api.products.delete(row._id.toString())
            console.log(response)
        } 
    }

    return (
        <tr id={row.id}>
            <td >{row.id}</td>
            <td >{row.description}</td>
            <td >{row.price}</td>
            <td >{row.state}</td>
            <td >
                <div className="d-flex justify-content-center">

                    <Button className="action-buttons ml-1" onClick={deleteActivation}variant="outline-danger">✖</Button>

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