import { Container, Row } from "react-bootstrap";
import Product from "./ProductInput.jsx";
import Price from "./PriceInput.jsx";
import State from "./StateInput.jsx";
import Filter from "./Filter.jsx";
import RegisterButton from "./RegisterButton.jsx";

const ImputForm = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Product />
            <Price />
            <State />
            <Filter />
            <RegisterButton />
        </Row>
    )
}

export default ImputForm;