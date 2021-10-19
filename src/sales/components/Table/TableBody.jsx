import TableRow from "./TableRow";

const TableBody = (props) => {

    const { records } = props;

    return (
        <tbody>

            {records.map((row) => (
                <TableRow row={row} />
            ))}

        </tbody>
    );
}

export default TableBody;