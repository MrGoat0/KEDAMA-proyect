const TableHeader = () => {
    return (
        <thead className="thead-style">
            <tr>
                <th width="80px">ID</th>
                <th width="300px">Producto</th>
                <th width="120px">Precio</th>
                <th width="130px">Estado</th>
                <th width="110px">Acción</th>
                {/* <th >ID</th>
                <th >Producto</th>
                <th >Precio</th>
                <th >Estado</th>
                <th >Acción</th> */}
            </tr>
        </thead>
    )
}

export default TableHeader;