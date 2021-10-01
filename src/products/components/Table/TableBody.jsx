import TableRow from "./TableRow";
// import { useState } from "react";

const TableBody = (props) => {
    // const products =
    //     [{ id: 0, description: "Camiseta", price: 40000, state: "Disponible" },
    //     { id: 1, description: "Pantalón", price: 80000, state: "No disponible" },
    //     { id: 2, description: "Chaqueta", price: 120000, state: "Disponible" },
    //     { id: 3, description: "Camiseta", price: 40000, state: "Disponible" },
    //     { id: 4, description: "Pantalón", price: 80000, state: "No disponible" },
    //     { id: 5, description: "Camiseta", price: 40000, state: "Disponible" },
    //     { id: 6, description: "Pantalón", price: 80000, state: "No disponible" }]


    const { records } = props;

    return (
        <tbody>

            {records.map((record) => (
                <TableRow record={record} />
            ))}

        </tbody>
    )
}

export default TableBody;