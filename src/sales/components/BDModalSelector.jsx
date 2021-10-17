import SalesTable from "./TableWithSales";
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';
const BDModalSelector = ({type,products,users}) =>{
    if (type === 'usuario'){
        console.log(users)
        return(
            <Table striped bordered hover>
                <SalesTable recordsData={users} type={type}/>
            </Table>
        )
    }else if (type === 'producto'){
        return(
            <Table striped bordered hover>
                <SalesTable recordsData={products} type={type}/>
            </Table>
        )
    }
}

BDModalSelector.propTypes = {
    type: PropTypes.string,products: PropTypes.array
}

export default BDModalSelector;