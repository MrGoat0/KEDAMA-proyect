import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";
const Producto = ({ producto }) => {
  return (
    <tr className="text-center">
      <th className="text-left">{producto.id}</th>
      <th>{producto.producto}</th>
      <th>{producto.price}</th>
      <th>{producto.location}</th>
      <th>
        <Button variant="primary">
          <AiFillEdit />
          Editar Venta
        </Button>
      </th>
      <th>
        <Button variant="primary">
          <AiFillDelete />
          Borrar venta
        </Button>
      </th>
    </tr>
  );
};

export default Producto;
