const TableRow = ({ row }) => {
    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.description}</td>
            <td>{row.price}</td>
            <td>{row.state}</td>
        </tr>
    )
}

export default TableRow;