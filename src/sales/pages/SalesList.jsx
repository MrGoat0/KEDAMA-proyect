import React from "react";
import { Table } from "react-bootstrap";
import Producto from "./FormProducto";
const SalesList = () => {
  const SalesDemo = [
    {
      id: "123456",
      producto: "Articlo 1",
      price: 100000,
      location: "tienda 1",
    },
    {
      id: "159753",
      producto: "Articlo 2",
      price: 150000,
      location: "tienda 2",
    },
    {
      id: "123456",
      producto: "Articlo 1",
      price: 100000,
      location: "tienda 1",
    },
    {
      id: "123456",
      producto: "Articlo 1",
      price: 100000,
      location: "tienda 1",
    },
  ];

  return (
    <div className="m-5">
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th className="text-left">ID</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Tienda (Localización)</th>
            <th>Opción 1</th>
            <th>Opción 2</th>
          </tr>
        </thead>
        {SalesDemo.map((producto) => (
          <Producto producto={producto} />
        ))}
      </Table>
    </div>
  );
};
export default SalesList;
