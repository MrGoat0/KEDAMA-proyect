const TableHeader = () => {
    return (
        <thead className="thead-style">
            <tr>
                <th width="80px">ID</th>
                <th width="300px">Producto</th>
                <th width="150px">Valor unitario</th>
                <th width="140px">Estado</th>
                <th width="110px">Acción</th>
            </tr>
        </thead>
    )
}

export default TableHeader;