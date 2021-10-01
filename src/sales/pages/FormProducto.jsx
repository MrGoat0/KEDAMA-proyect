import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";
const Producto = ({ producto }) => {
  /* const handleClick = () => {
    <Edit />;
  }; */
  return (
    <tr className="text-center">
      <th className="text-left">{producto.id}</th>
      <th>{producto.producto}</th>
      <th>{producto.price}</th>
      <th>{producto.location}</th>
      <th>
        <Button href="/categories/sales/edit" type="button" variant="primary">
          <AiFillEdit />
          Editar Venta
        </Button>
      </th>
      <th>
        <Button variant="primary" href="#">
          <AiFillDelete />
          Borrar venta
        </Button>
      </th>
    </tr>
  );
};

export default Producto;
