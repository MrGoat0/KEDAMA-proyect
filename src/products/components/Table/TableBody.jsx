import TableRow from "./TableRow";

const TableBody = (props) => {
    const { records, setSearch, info, setInfo, action, setAction } = props;

    return (
        <tbody>
            {records.map((row) => (
                <TableRow key={row.id}
                    row={row}
                    setSearch={setSearch}
                    info={info}
                    setInfo={setInfo}
                    action={action}
                    setAction={setAction} />
            ))}
        </tbody>
    );
}

export default TableBody;