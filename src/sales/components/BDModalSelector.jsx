import SalesTable from "./TableWithSales";
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
const BDModalSelector = (props) =>{
    const {changeProduct,
    changeUserName ,
    changeSellerName, type,tableToShow} = props;
    if (type === 'usuario'){
        return(
            <div>

            <Table striped bordered hover id="users-table">
                <SalesTable recordsData={tableToShow} type={type} hooksToChange = {changeUserName}/>
            </Table>
            </div>
            
        )
    }else if (type === 'producto'){
        return(
            <div>
            <Table striped bordered hover>
                <SalesTable recordsData={tableToShow} type={type} hooksToChange = {changeProduct}/>
            </Table>
            </div>
        )
    }else if(type === 'vendedor'){
        return(
        <div>
            <Table striped bordered hover>
                <SalesTable recordsData={tableToShow} type={type} hooksToChange = {changeSellerName}/>
            </Table>
            </div>
        )
    }
}

BDModalSelector.propTypes = {
    type: PropTypes.string,products: PropTypes.array
}

export default BDModalSelector;