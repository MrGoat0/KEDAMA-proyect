import { Row } from "react-bootstrap";
import AutoId from "./AutoId.jsx"
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";
import UpdateButton from "./UpdateButton.jsx";
import { useState } from "react";

const ImputForm = (props) => {
    const { pageSwitch, records, setRecord, setShow, setAlert, autoId, setId, searchId, setSearchId } = props;
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");



    if (pageSwitch === "Register") {
        return (
            <Row className="d-flex justify-content-center">
                <AutoId setSearchId={setSearchId} />
                <Product setDescription={setDescription} />
                <Price setPrice={setPrice} />
                <State setState={setState} />

                {/* <Filter records={records}
                    setRecord={setRecord}
                    searchId={searchId}
                    setSearchId={setSearchId}
                    setAlert={setAlert}
                    setShow={setShow} /> */}
                <RegisterButton records={records}
                    setRecord={setRecord}
                    description={description}
                    price={price}
                    state={state}
                    setShow={setShow}
                    setAlert={setAlert}
                    autoId={autoId}
                    setId={setId} />
            </Row>)
    } else {
        return (<Row className="d-flex justify-content-center">
            <Product />
            <Price />
            <State />
            {/* <Filter /> */}
            <UpdateButton />
        </Row>)
    }


}

export default ImputForm;