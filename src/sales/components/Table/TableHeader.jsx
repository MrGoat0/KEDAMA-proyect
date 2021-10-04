const TableHeader = (props) => {
    const { isEmpty } = props;
    if (!isEmpty) {
        return (
            <thead>
                <tr>
                    <th width="70px">Id</th>
                    <th width="auto">Venta</th>
                    <th width="120px">Valor venta</th>
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