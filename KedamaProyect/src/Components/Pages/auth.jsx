import React from "react";
import { Link } from "react-router-dom";
const Auth=()=>{
    return(
        <div>
            Esta es la de autorizacion
            <div className='buttons'>
       <Link to="/categories" className="btn btn-dark">
       <button>Inicio de sesion</button>
       </Link>
     </div>
        </div>
        
    )
    
    
    }
    export default Auth