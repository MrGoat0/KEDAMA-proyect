import TableRow from "./TableRow";

const TableBody = (props) => {
    const { records, search, info, setInfo } = props;

    return (
        <tbody>
            {records.map((row) => (
                <TableRow key={row.id}
                    row={row}
                    search={search}
                    info={info}
                    setInfo={setInfo} />
            ))}
        </tbody>
    );
}

export default TableBody;