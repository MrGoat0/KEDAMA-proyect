const TableHeader = (props) => {
    const { isEmpty } = props;
    if (!isEmpty) {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Valor unitario</th>
                    <th>Estado</th>
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