import { Nav } from "react-bootstrap";

const ProductNav = () => {
    return (
        <Nav className="justify-content-end mt-1 mb-3">
            <Nav.Item>
                <Nav.Link href="/categories/products">Registro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/categories/register_products">Gestión</Nav.Link>
            </Nav.Item>
        </Nav >)
}

export default ProductNav;