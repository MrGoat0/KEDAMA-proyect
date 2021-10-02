const TableHeader = (props) => {
    const { isEmpty } = props;
    if (!isEmpty) {
        return (
            <thead>
                <tr>
                    <th width="70px">Id</th>
                    <th width="auto">Producto</th>
                    <th width="120px">Valor unitario</th>
                    <th width="120px">Estado</th>
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