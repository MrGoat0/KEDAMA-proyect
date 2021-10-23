import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PropTypes from 'prop-types';
// import React,{useEffect,useState} from 'react';
// import Table from 'react-bootstrap/Table';
 
 
const SalesTable = (props) => {
    const {recordsData, type} = props;
    console.log(recordsData.PromiseResult, typeof recordsData, "records Data")
    if(typeof recordsData !== "undefined" && recordsData.length === 2) {
        if((typeof recordsData[0] === "undefined" && typeof recordsData[1] === "undefined") || (recordsData[0].length === 0 && recordsData[1].length === 0 )){
            return(<TableHeader type={type}/>)
        }
        else{
            if(recordsData[0].length !== 0){
                return(
                <div>
                    {/* {document.getElementById("TableArea").innerHTML= ""} */}
                    <TableHeader type={type}/>
                    <TableBody recordsData={recordsData[0]} type={type} />  
                </div>)
            }else if(typeof recordsData[1] != "undefined" || recordsData[1].length > 0){
                return(
                <div>
                    <TableHeader type={type}/>
                    <TableBody recordsData={recordsData[1]} type={type}/>  
                </div>
                )
            }else{ 
                return(<TableHeader type={type}/>)
            }
        }
    }else{
        console.log(recordsData, "to table")
        return(
            <div>
                <TableHeader type={type}/>
                <TableBody recordsData={recordsData} type={type}/>  
            </div>
        )
    }
}
 
SalesTable.propTypes = {
    recordsData:PropTypes.array,
    type:PropTypes.string
  };
 
export default SalesTable;