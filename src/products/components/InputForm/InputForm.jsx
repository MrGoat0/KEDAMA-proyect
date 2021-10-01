import { Row } from "react-bootstrap";
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";
import UpdateButton from "./UpdateButton.jsx";
import { useState } from "react";

const ImputForm = (props) => {
    const { pageSwitch, records, setRecord, setShow, setAlert } = props;
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");
    const [autoId, setId] = useState(10000);


    if (pageSwitch === "Register") {
        return (
            <Row className="d-flex justify-content-center">
                <Product setDescription={setDescription} />
                <Price setPrice={setPrice} />
                <State setState={setState} />
                <Filter />
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
            <Filter />
            <UpdateButton />
        </Row>)
    }


}

export default ImputForm;