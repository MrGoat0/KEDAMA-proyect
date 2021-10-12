import TableRow from "./TableRow";
// function iterateTrough(data){
//     for(let i = 0; i < data.length; i++){
//         <TableRow row={data[i]}/>
//     }
// }
const TableBody = (props) => {
    const {recordsData} = props;
    return(
        <tbody>
            {recordsData.map((row)=>(
                <TableRow row={row}/>
            ))}
        {/* {iterateTrough(recordsData)} */}
        </tbody>
    )
}

export default TableBody;