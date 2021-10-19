const TableRow = (props) => {
    const { row } = props;

    // if (search) {
    //     if (search.id === row.id)
    //         var color = "#008891"
    // } else {
    //     var color = ""
    // }

    return (
        <tr>
            <td>{row.clientId}</td>
            <td >{row.clientName}</td>
            <td >{row.total}</td>
            <td >{row.state}</td>
        </tr>
    )
}

export default TableRow;