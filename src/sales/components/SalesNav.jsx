import { Nav } from "react-bootstrap";

const SalesNav = ({ navSwitch }) => {

    if (navSwitch === "Register") {
        return (
            <div className="dark-background-nav">
                <Nav className="justify-content-end mt-1 mb-3">
                    <Nav.Item>
                        <Nav.Link href="/categories/Sales" active disabled>Registro</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/categories/register_Sales">Gestión</Nav.Link>
                    </Nav.Item>
                </Nav >
            </div >
        )

    } else if (navSwitch === "Management") {
        return (
            <Nav className="justify-content-end mt-1 mb-3">
                <Nav.Item>
                    <Nav.Link href="/categories/Sales">Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/categories/register_Sales" disabled>Gestión</Nav.Link>
                </Nav.Item>
            </Nav >
        )

    }
}

export default SalesNav;