import { Col, Modal } from "react-bootstrap";
import api from "../../../api";
import { useState } from "react"

const RegisterButton = (props) => {
    const { info, setMissing, countRecords, refreshTable, setRefreshTable } = props.properties;
    const [modalSettings, setModalSettings] = useState({ show: false, type: "" })

    // Setting modal info based on action
    if (modalSettings.type === "register") {
        var modalHeader = "¡Resgistro exitoso!"
        var modalBody = `Producto creado con el ID ${countRecords.maxId} .`

    } else if (modalSettings.type === "warning") {
        modalHeader = "¡Atención!"
        modalBody = "Diligencie todos los campos requeridos."

    } else if (modalSettings.type === "update") {
        modalHeader = "¡Actualización exitosa!"
        modalBody = "Se actualizó correctamente el producto con ID " +
            document.getElementById("filter-input").value + "."

    } else if (modalSettings.type === "serverError") {
        modalHeader = "¡Atención!"
        modalBody = "Ya existe un producto con la descripción especificada."
    } else if (modalSettings.type === "unableUpdate") {
        modalHeader = "¡No es posible hacer la actualización!"
        modalBody = "Cargue la información con el botón azul de la " +
            "fila correspondiente y no deje campos vacíos. Recuerde: el campo 'Descripción del producto' debe ser único."
    }

    // Setting red border and triggering modal feedback on missing fields
    const triggerMissingCells = () => {
        if (info.description !== "") {
            var missingDescription = false
        } else { missingDescription = true }
        if (info.price !== "") {
            var missingPrice = false
        } else { missingPrice = true }
        if (info.state !== "") {
            var missingState = false
        } else { missingState = true }
        setMissing({
            description: missingDescription,
            price: missingPrice,
            state: missingState
        })
        setModalSettings({ show: true, type: "warning" })
    }

    // Register button action
    const registerBtn = async (event) => {
        // Looking for missing fields. if true -> save record
        if (info.description !== "" && info.price !== "" && info.state !== "") {
            // reset red borders
            setMissing({ description: false, price: false, state: false })

            // POST request to api
            await api.products.create({
                method: 'POST',
                body: JSON.stringify(
                    {
                        id: countRecords.maxId + 1,
                        description: info.description.trim(),
                        price: parseInt(info.price),
                        state: info.state
                    })
            }).then(async (res) => {
                if (res.error) {
                    setModalSettings({ show: true, type: "serverError" })
                } else {// Triggerring success register modal
                    setRefreshTable(!refreshTable)
                    setModalSettings({ show: true, type: "register" })
                }
            })

        } else {
            triggerMissingCells()
        }
    }

    // Update button action
    const updateBtn = async () => {
        // Looking for missing fields. if true -> update record by id
        if (info.description !== "" && info.price !== "" && info.state !== "") {
            // reset red borders
            setMissing({ description: false, price: false, state: false })

            // PUT request to api
            await api.products.update(info._id, {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        description: info.description.trim(),
                        price: parseInt(info.price),
                        state: info.state
                    }
                )
            }).then((res) => {
                if (res.error) {
                    setModalSettings({ show: true, type: "unableUpdate" })
                } else {
                    setRefreshTable(!refreshTable)
                    setModalSettings({ show: true, type: "update" })
                }
            });

        } else {
            triggerMissingCells()
            setModalSettings({ show: true, type: "unableUpdate" })

        }
    }

    const handleClose = () => {
        setModalSettings({ show: false, type: "" })
    };

    return (

        <Col className="d-flex justify-content-between">
            <button
                className="btns"
                type="submit"
                onClick={updateBtn}>Actualizar
            </button>

            <button
                className="btns"
                type="submit"
                onClick={registerBtn}>Registrar
            </button>

            <Modal show={modalSettings.show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{modalHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalBody}</Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
        </Col>

    )
}

export default RegisterButton;