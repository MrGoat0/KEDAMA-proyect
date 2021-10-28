import api from "../../api"
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
import UpdateSaleModal from "./UpdateSalesModal.jsx";

const TableRow = (props) => {
    const { row, type, hooksToChange } = props;

    const pickedUser = () => {
        document.getElementById("user-form").value = row._id;
        document.getElementById("user-name").textContent = row.name;
        hooksToChange(row._id);
    }
    const pickedSeller = () => {
        document.getElementById("seller-form").value = row._id;
        document.getElementById("seller-name").textContent = row.name;
        hooksToChange(row._id)
    }
    const pickedProduct = () => {
        document.getElementById("product-form").value = row._id;
        document.getElementById("product-description").textContent = row.description;
        hooksToChange(row._id);
    }
    const [sellerName, setSellerName] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [productPrice, setProductPrice] = useState()


    // Mapping the sellers name by to their id
    useEffect(() => {
        const fetchUserByIDSales = async () => {
            if (typeof row.seller !== "undefined") {
                const response = await api.users.getByID(row.seller);
                setSellerName(response ? response.name : "Desconocido")
            }
        }
        fetchUserByIDSales()
    }, [row.seller])

    const updateActivation = () => {
        setShowModal(true)
        setProductPrice(row.total / row.quantity)
    }

    const updateData = async () => {
        var reqBody = {}
        if (document.getElementById("date-modal-form").value === "") {
            reqBody.date = document.getElementById("date-modal-form").placeholder
        } else { reqBody.date = document.getElementById("date-modal-form").value }

        if (document.getElementById("client-modal-form").value === "") {
            reqBody.clientName = document.getElementById("client-modal-form").placeholder
        } else { reqBody.clientName = document.getElementById("client-modal-form").value }

        if (["", "0"].includes(document.getElementById("quantity-modal-form").value)) {
            reqBody.quantity = parseInt(document.getElementById("quantity-modal-form").placeholder)
            reqBody.total = productPrice * reqBody.quantity
        } else {
            reqBody.quantity = parseInt(document.getElementById("quantity-modal-form").value)
            reqBody.total = productPrice * reqBody.quantity
        }

        await api.sales.update(row._id, {
            method: "PUT",
            body: JSON.stringify(reqBody)
        })
        setShowModal(false)
        window.location.reload()
    }

    const handleClose = () => {
        setShowModal(false)
    }

    //for listing sales in salesList interfaces
    if (type === "salesRecorded") {
        return (
            <>
                <tr className="h-100">
                    {/* <td >{row._id}</td> */}
                    <td>{row.date}</td>
                    <td>{sellerName}</td>
                    <td>{row.clientName}</td>
                    <td>{row.productInfo.description}</td>
                    <td>{row.quantity}</td>
                    <td>{row.total}</td>
                    <td >
                        <div className="d-flex justify-content-center">
                            <Button id={"updateBtn-" + row._id}
                                className="action-buttons ml-2"
                                onClick={updateActivation}
                                variant="primary"> 🖊 </Button>
                        </div>

                    </td>

                    {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
                </tr>
                <UpdateSaleModal show={showModal} onHide={handleClose} row={row} updateData={updateData} />
            </>)

    }
    //for modal in registerSales interface
    if (type === "usuario") {
        return (<tr onClick={pickedUser} >
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            {/* <td>{row.state}</td> */}
            <td>{row.role}</td>
        </tr>)
    } else if (type === "vendedor") {
        return (<tr onClick={pickedSeller}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            {/* <td>{row.state}</td> */}
            <td>{row.role}</td>
        </tr>)
    } else if (type === "producto") {
        return (
            <tr onClick={pickedProduct}>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <td>{row.state}</td>
                {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
            </tr>
        )
    }
}
export default TableRow;