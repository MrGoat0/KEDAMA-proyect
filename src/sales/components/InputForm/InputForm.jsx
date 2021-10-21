import { Row } from "react-bootstrap";
import AutoId from "./AutoId.jsx"
import Sales from "./SalesInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";
import UpdateButton from "./UpdateButton.jsx";
import { useState } from "react";
import NombreVendedor from "./Vendedor.jsx";

const ImputForm = (props) => {
    const { pageSwitch, records, setRecord, setShow, setAlert, autoId, setId, searchId, setSearchId } = props;
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");



    if (pageSwitch === "Register") {
        return (
            <div>
                <Row className="d-flex justify-content-center">
                    <AutoId setSearchId={setSearchId} />
                    <Sales setDescription={setDescription} />
                    <Price setPrice={setPrice} />
                    <State setState={setState} />
                    
                </Row>
                <Row className="d-flex justify-content-center">
                    {/* <FechaInicial setSearchId={setSearchId} />
                    <FechaFinal setDescription={setDescription} /> */}
                    <NombreVendedor />
                    <RegisterButton records={records}
                        setRecord={setRecord}
                        description={description}
                        price={price}
                        state={state}
                        setShow={setShow}
                        setAlert={setAlert}
                        autoId={autoId}
                        setId={setId} />
                </Row>
            </div>
        )

    } else {
        return (<Row className="d-flex justify-content-center">
            <Sales />
            <Price />
            <State />
            {/* <Filter /> */}
            <UpdateButton />
        </Row>)
    }


}

export default ImputForm;