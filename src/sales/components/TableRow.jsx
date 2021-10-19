const TableRow = (props) => {
    const {row,type} = props;


    //for listing sales in salesList interfaces
    if(type === "salesRecorded"){
        return(<tr className="h-100">
            <td >{row._id}</td>
            <td>{row.date}</td>
            <td>{row.clientName}</td>
            <td>{row.productInfo.description}</td>
            <td>{row.quantity}</td>
            {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
        </tr>)
    }
    //for modal in registerSales interface
    if(type === "usuario" || type=== "vendedor"){
        return(<tr>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.state}</td>
            <td>{row.role}</td>
        </tr>)
    }else if(type === "producto"){
        return(
            <tr>
                <td>{row.id}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
                <td>{row.state}</td>
                {/* <td>{row.editar?}</td> agregar funciones de editar y eliminar*/}
            </tr>
        )
    }
}
export default TableRow;