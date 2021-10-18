import { Col, Modal } from "react-bootstrap";
import api from "../../../api";
import { useState } from "react"

const RegisterButton = (props) => {
    const { info, action, setMissing } = props.properties;
    const [modalSettings, setModalSettings] = useState({ show: false, type: "" })
    // Setting modal info based on action
    if (modalSettings.type === "register") {
        var modalHeader = "¡Resgistro exitoso!"
        var modalBody = "Producto creado con el ID " + info.id + "."
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
        modalHeader = "¡Atención!"
        modalBody = "Para modificar un registro, por favor presione " +
            "el botón azul de la fila correspondiente al producto que desea actualizar."
    }

    // Setting red border and modal feedback
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
        // Triggering alert modal
        setModalSettings({ show: true, type: "warning" })
    }

    // Register button action
    const registerBtn = async (event) => {
        // Looking for missing fields. if true -> save record
        if (info.description !== "" && info.price !== "" && info.state !== "") {

            // reset red borders
            setMissing({ description: false, price: false, state: false })

            // POST request to api
            const response = await api.products.create({
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    authorization: "Bearer " + localStorage.getItem('token'),
                },
                body: JSON.stringify(
                    {
                        id: info.id + 1,
                        description: info.description.trim(),
                        price: parseInt(info.price),
                        state: info.state
                    }
                )
            })

            if (response.error) {
                setModalSettings({ show: true, type: "serverError" })
            } else {// Triggerring success register modal
                info.id = info.id + 1
                setModalSettings({ show: true, type: "register" })
            }

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
            const response = await api.products.update(info._id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    authorization: "Bearer " + localStorage.getItem('token'),
                },
                body: JSON.stringify(
                    {
                        description: info.description.trim(),
                        price: parseInt(info.price),
                        state: info.state
                    }
                )
            });

            if (response.error) {
                setModalSettings({ show: true, type: "serverError" })
            } else {// Triggerring success update modal
                setModalSettings({ show: true, type: "update" })
            }
        } else {
            if (action) {
                triggerMissingCells()
            } else {
                (setModalSettings({ show: true, type: "unableUpdate" }))
            }

        }
    }

    const handleClose = () => {
        setModalSettings({ show: false, type: "" })

        if (["update", "register"].includes(modalSettings.type)) { window.location.reload() }
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