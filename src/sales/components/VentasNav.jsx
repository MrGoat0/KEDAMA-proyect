import { Nav } from "react-bootstrap";

const VentasNav = ({ VentaSwitch }) => {

    if (VentaSwitch === "Register") {
        return (
            <div>
                <Nav className="justify-content-end m-0">
                    <Nav.Item>
                        <Nav.Link href="/categories/sales" active disabled>Registro</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/categories/register_sales">Gestión</Nav.Link>
                    </Nav.Item>
                </Nav >
            </div >
        )

    } else if (VentaSwitch === "Management") {
        return (
            <Nav className="justify-content-end m-0">
                <Nav.Item>
                    <Nav.Link href="/categories/sales">Registro</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/categories/register_sales" disabled>Gestión</Nav.Link>
                </Nav.Item>
            </Nav >
        )

    }
}

export default VentasNav;