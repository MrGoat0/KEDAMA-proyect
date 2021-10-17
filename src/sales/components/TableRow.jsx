const TableRow = (props) => {
    const {row,type} = props;
    // console.log(row);
    //for listing sales in salesList interfaces
    if(type === "salesRecorded"){
        return(<tr>
            <td>{row.index}</td>
            <td>{row.fecha}</td>
            <td>{row.usuario}</td>
            <td>{row.productos}</td>
            <td>{row.precio}</td>
            {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
        </tr>)
    }
    //for modal in registerSales interface
    if(type === "usuario"){
        return(<tr>
            <td>{row.index}</td>
            <td>{row.usuario}</td>
            <td>{row.rol}</td>
        </tr>)
    }else if(type === "producto"){
        return(
            <tr>
                <td>{row.index}</td>
                <td>{row.producto}</td>
                <td>{row.precio}</td>
                <td>{row.estado}</td>
                {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
            </tr>
        )
    }
}
export default TableRow;