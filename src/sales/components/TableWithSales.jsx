import TableHeader from './TableHeader';
import TableBody from './TableBody';
// import React,{useEffect,useState} from 'react';
// import Table from 'react-bootstrap/Table';

// const TableHeader = (props) => {
//     const row = props;
//     return (
//       <thead>
//         <tr>
//         <td></td>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//         </tr>
//       </thead>
//     )



const SalesTable = (props) => {
    const {recordsData} = props;
    return(
        <div>
            <TableHeader/>
            <TableBody recordsData={recordsData}/>  
        </div>
    )
}

export default SalesTable;
