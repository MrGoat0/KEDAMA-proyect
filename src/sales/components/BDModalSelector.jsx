import SalesTable from "./TableWithSales";
import Table from 'react-bootstrap/Table'
const BDModalSelector = ({type}) =>{

    const records = [{
        index: "1",
        fecha: "01/01/2021",
        usuario:"MasterFill",
        producto: "producto #",
        cantidad: "10000",
    },{
        index: "1",
        fecha: "01/01/2021",
        usuario:"MasterFill",
        producto: "producto #",
        cantidad: "10000",
    },{
        index: "1",
        fecha: "01/01/2021",
        usuario:"MasterFill",
        producto: "producto #",
        cantidad: "10000",
    },{
        index: "1",
        fecha: "01/01/2021",
        usuario:"MasterFill",
        producto: "producto #",
        cantidad: "10000",
    },{
        index: "1",
        fecha: "01/01/2021",
        usuario:"MasterFill",
        producto: "producto #",
        cantidad: "10000",
    }]
    if (type === 'usuario'){
        return(
            <Table striped bordered hover>
                <SalesTable recordsData={records}/>
            </Table>
        )
    }else if (type === 'producto'){
        return(
            <span>algo en espan</span>
            // <Table striped bordered hover>
            //     <SalesTable recordsData={records}/>
            // </Table>
        )
    }
}

export default BDModalSelector;