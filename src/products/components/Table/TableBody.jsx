import TableRow from "./TableRow";

const TableBody = (props) => {

    const { records, search } = props;

    return (
        <tbody>

            {records.map((row) => (
                <TableRow row={row} search={search} />
            ))}

        </tbody>
    );
}

export default TableBody;