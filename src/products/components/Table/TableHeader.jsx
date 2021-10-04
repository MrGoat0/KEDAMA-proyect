const TableHeader = (props) => {
    const { isEmpty } = props;
    if (!isEmpty) {
        return (
            <thead className="thead-style">
                <tr>
                    <th width="80px">Id</th>
                    <th width="300px">Producto</th>
                    <th width="150px">Valor unitario</th>
                    <th width="140px">Estado</th>
                    {/* <th width="110px">Acción</th> */}
                </tr>
            </thead>
        )
    } else {
        return (
            <thead></thead>
        )
    }
}

export default TableHeader;