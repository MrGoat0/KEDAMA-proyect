import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PropTypes from 'prop-types';
// import React,{useEffect,useState} from 'react';
// import Table from 'react-bootstrap/Table';


const SalesTable = (props) => {
    const { recordsData, type, hooksToChange } = props;
    if (typeof recordsData !== "undefined" && recordsData.length === 2) {
        // if((typeof recordsData[0] === "undefined" && typeof recordsData[1] === "undefined") || (recordsData[0].length === 0 && recordsData[1].length === 0 )){
        //     return(<TableHeader type={type}/>)
        // }
        // else{
        if (recordsData[0].length !== 0) {
            return (
                <>
                    {/* {document.getElementById("TableArea").innerHTML= ""} */}
                    <TableHeader type={type} />
                    <TableBody recordsData={recordsData[0]} type={type} />
                </>)
        } else if (typeof recordsData[1] != "undefined" || recordsData[1].length > 0) {
            return (
                <>
                    <TableHeader type={type} />
                    <TableBody recordsData={recordsData[1]} type={type} />
                </>
            )
        } else {
            return (<TableHeader type={type} />)
        }
        // }
    } else {

        return (
            <>
                <TableHeader type={type} />
                <TableBody recordsData={recordsData} type={type} hooksToChange={hooksToChange} />
            </>
        )
    }
}

SalesTable.propTypes = {
    recordsData: PropTypes.array,
    type: PropTypes.string
};

export default SalesTable;