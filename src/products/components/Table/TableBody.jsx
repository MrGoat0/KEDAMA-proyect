import TableRow from "./TableRow";

const TableBody = (props) => {
    const { records } = props.properties;
    return (
        <tbody>
            {records.map((row) => (
                <TableRow key={row.id}
                    row={row}
                    properties={props} />
            ))}
        </tbody>
    );
}

export default TableBody;