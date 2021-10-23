import TableRow from "./TableRow";
// function iterateTrough(data){
//     for(let i = 0; i < data.length; i++){
//         <TableRow row={data[i]}/>
//     }
// }
const TableBody = (props) => {
    const { recordsData, type, hooksToChange} = props;
    if (typeof recordsData !== "undefined") {
        return (
            <tbody>
                {recordsData.map((row) => (
                    <TableRow key={row._id} row={row} type={type} hooksToChange={hooksToChange}/>
                ))}
                {/* {iterateTrough(recordsData)} */}
            </tbody>
        )
    } else { return null }
}

export default TableBody;