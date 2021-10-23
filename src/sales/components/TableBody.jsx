import TableRow from "./TableRow";
// function iterateTrough(data){
//     for(let i = 0; i < data.length; i++){
//         <TableRow row={data[i]}/>
//     }
// }
const TableBody = (props) => {
    const {recordsData,type} = props;
    console.log(recordsData, "records")
    if(typeof recordsData !== "undefined"){
        return(
            <tbody>
                {recordsData.map((row)=>(
                    <TableRow row={row} type={type} />
                ))}
            {/* {iterateTrough(recordsData)} */}
            </tbody>
        )
    }else{ return null}
}

export default TableBody;