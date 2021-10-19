const TableHeader = ({type})=>{

    if(type === "salesRecorded"){
        return(<thead>
            <tr>
                <th width="20%">Id</th>
                <th width="47%">Fecha</th>
                <th width="10%">Usuario</th>
                <th width="47%">Producto</th>
                <th width="20%">Cantidad</th>
            </tr>
    </thead>)
    }else if(type === "usuario" || type === "vendedor"){
        return(
            <thead>
            <tr>
                <th width="30%">Id</th>
                <th width="60%">Name</th>
                <th width="60%">Email</th>
                <th width="60%">State</th>
                <th width="10%">Rol</th>
            </tr>
    </thead>
        )
    }else if(type === "producto"){
        return(<thead>
            <tr>
                <th width="15%">Id</th>
                <th width="55%">Producto</th>
                <th width="20%">Precio</th>
                <th width="30%">Estado</th>
            </tr>
    </thead>)
    }
}
export default TableHeader;