import React from "react";
import { Link } from "react-router-dom";
import '../../Styles/category.css';
import { Button} from 'react-bootstrap';
import Header from '../shared/header.jsx'
import Footer from '../shared/footer.jsx'
const Selector=()=>{
return(
 <div className="container-Category">
   <Header/>
  <div className="grid-buttons">
    <Link to="/categories/users ">
      <Button variant="light" size="lg">Usuarios</Button>
    </Link>
    <Link to="/categories/seller" >
      <Button variant="light" size="lg">Gestion Vendedores</Button>
    </Link>
    <Link to="/categories/sales" >
      <Button variant="light" size="lg">Ventas</Button>
    </Link>
  </div>
  <Footer/>
  </div>
  
)


}
export default Selector