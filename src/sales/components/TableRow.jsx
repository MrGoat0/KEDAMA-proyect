const TableRow = (props) => {
    const {row,type, hooksToChange} = props;

    const pickedUser = ()=>{
        document.getElementById("user-form").value = row._id;
        document.getElementById("user-name").textContent = row.name;
        hooksToChange(row._id);
    }
    const pickedSeller = ()=>{
        document.getElementById("seller-form").value = row._id;
        document.getElementById("seller-name").textContent = row.name;
        hooksToChange(row._id)
    }
    const pickedProduct = ()=>{
        document.getElementById("product-form").value = row._id;
        document.getElementById("product-description").textContent = row.description;
        hooksToChange(row._id);
    }

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
    if(type === "usuario"){
        return(<tr onClick = {pickedUser} >
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.state}</td>
            <td>{row.role}</td>
        </tr>)
    }else if(type=== "vendedor"){
        return(<tr onClick = {pickedSeller}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.state}</td>
            <td>{row.role}</td>
        </tr>)
    }else if(type === "producto"){
        return(
            <tr onClick = {pickedProduct}>
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