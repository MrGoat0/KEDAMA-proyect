import { Row } from "react-bootstrap";
import AutoId from "./AutoId.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
// import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";
import { useState } from "react";
import FilterString from "./FilterDescription.jsx";
import '../../../styles/inpForm.css';
const ImputForm = (props) => {
    const { description, setDescription, price, setPrice,
        state, setState, pageSwitch, records, setRecord,
        setShow, setAlert, autoId, setId, setSearchId,setsearchDescription } = props;

    const [missing, setMissing] = useState({ description: false, price: false, state: false });

    if (pageSwitch === "Register") {
        return (
            
            <><Row className="d-flex justify-content-center">
                <AutoId setSearchId={setSearchId} />
                <FilterString setsearchDescription={setsearchDescription} />
            </Row>
            <Row className="d-flex justify-content-center">
                    <Product setDescription={setDescription}
                        missingInput={missing.description} />
                    <Price setPrice={setPrice} missingInput={missing.price} />
                    <State setState={setState} missingInput={missing.state} />
                    {/* <Filter /> */}
                    <RegisterButton records={records}
                        setRecord={setRecord}
                        description={description}
                        price={price}
                        state={state}
                        setShow={setShow}
                        setAlert={setAlert}
                        autoId={autoId}
                        setId={setId}
                        missing={missing}
                        setMissing={setMissing} />
                </Row></>
            
            )
    } else {
       
        return (
            <div id="global">
            <div id="mensajes">
        <Row className="d-flex justify-content-center">
            <Product />
            <Price />
            <State />
            {/* <Filter /> */}
            {/* <UpdateButton /> */}
        </Row>
        </div>
        </div>)
    }

    

}

export default ImputForm;