import React from "react";
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

const Selector=()=>{
return(
    <div className="grid-buttons">
     

         <Link to="/categories/users " className="btn btn-light">
         <Button variant="light">Usuarios</Button> 
       </Link>
     
       <Link to="/categories/seller" className="btn btn-light">
       <Button variant="light">Gestion Vendedores</Button>
       
       </Link>
     
   
       <Link to="/categories/sales" className="btn btn-light">
       <Button variant="light">Ventas</Button> 
       
       </Link>

    </div>
)


}
export default Selector