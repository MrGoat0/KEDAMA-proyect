const TableRow = (props) => {
    const {row} = props;
    // console.log(row);
    return(
        <tr>
            <td>{row.index}</td>
            <td>{row.fecha}</td>
            <td>{row.usuario}</td>
            <td>{row.producto}</td>
            <td>{row.cantidad}</td>
        </tr>
    )
}
export default TableRow;