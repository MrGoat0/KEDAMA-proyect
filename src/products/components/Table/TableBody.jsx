import TableRow from "./TableRow";

const TableBody = (props) => {
    const { records, info, setInfo } = props;

    return (
        <tbody>
            {records.map((row) => (
                <TableRow key={row.id}
                    row={row}
                    info={info}
                    setInfo={setInfo} />
            ))}
        </tbody>
    );
}

export default TableBody;