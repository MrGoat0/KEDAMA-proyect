import React from "react";
import { Link } from "react-router-dom";
const Selector=()=>{
return(
    <div>
         <Link to="/categories/users " className="btn btn-dark">
         <button>Usuario</button>
       </Link>
       <Link to="/categories/seller" className="btn btn-dark">
       <button>Gestion Vendedores</button>
       </Link>
       <Link to="/categories/sales" className="btn btn-dark">
       <button>Ventas</button>
       </Link>
        
    </div>
)


}
export default Selector