const TableHeader = ({ type }) => {

    if (type === "salesRecorded") {
        return (<thead className="thead-style">
            <tr>
                {/* <th width="20%">Id</th> */}
                <th width="10%">Fecha</th>
                <th width="20%">Vendedor</th>
                <th width="20%">Usuario</th>
                <th width="30%">Producto</th>
                <th width="10%">Cantidad</th>
                <th width="20%">Total</th>
                <th width="10%">Modificar</th>
            </tr>
        </thead>)
    } else if (type === "usuario" || type === "vendedor") {
        return (
            <thead className="thead-style">
                <tr>
                    <th width="30%">Id</th>
                    <th width="60%">Name</th>
                    <th width="60%">Email</th>
                    <th width="60%">State</th>
                    <th width="10%">Rol</th>
                </tr>
            </thead>
        )
    } else if (type === "producto") {
        return (<thead className="thead-style">
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