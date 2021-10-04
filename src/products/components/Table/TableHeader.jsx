const TableHeader = (props) => {
    const { isEmpty } = props;
    if (!isEmpty) {
        return (
            <thead>
                <tr>
                    <th width="80px">Id</th>
                    <th width="600px">Producto</th>
                    <th width="130px">Valor unitario</th>
                    <th width="130px">Estado</th>
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