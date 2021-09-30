import { Nav } from "react-bootstrap";

const ProductNav = ({ navSwitch }) => {

    if (navSwitch == "Register") {
        return (
            <Nav className="justify-content-end mt-1 mb-3">
                <Nav.Item>
                    <Nav.Link href="/categories/products" disabled>Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/categories/register_products">Gestión</Nav.Link>
                </Nav.Item>
            </Nav >)

    } else if (navSwitch == "Management") {
        return (
            <Nav className="justify-content-end mt-1 mb-3">
                <Nav.Item>
                    <Nav.Link href="/categories/products">Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/categories/register_products" disabled>Gestión</Nav.Link>
                </Nav.Item>
            </Nav >
        )

    }
}

export default ProductNav;