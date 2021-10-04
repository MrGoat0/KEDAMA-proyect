import TableRow from "./TableRow";

const TableBody = (props) => {

    const { records, search, setDescription, setPrice, setState } = props;

    return (
        <tbody>

            {records.map((row) => (
                <TableRow row={row}
                    search={search}
                    setDescription={setDescription}
                    setPrice={setPrice}
                    setState={setState} />
            ))}

        </tbody>
    );
}

export default TableBody;