import TableRow from "./TableRow";

const TableBody = (props) => {
    const { records, properties } = props;

    return (
        <tbody>
            {records.map((row) => (
                <TableRow key={row.id}
                    row={row}
                    properties={properties} />
            ))}
        </tbody>
    );
}

export default TableBody;