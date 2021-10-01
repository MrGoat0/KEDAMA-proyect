const TableRow = (props) => {
    const { record } = props;
    return (
        <tr>
            <td>{record.id}</td>
            <td>{record.description}</td>
            <td>{record.price}</td>
            <td>{record.state}</td>
        </tr>
    )
}

export default TableRow;