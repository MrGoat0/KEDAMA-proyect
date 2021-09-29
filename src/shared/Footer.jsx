import React from "react";
import { Button} from 'react-bootstrap';
import '../styles/shared.css';
import { Link } from "react-router-dom";

const Footer=()=>{
return(
 


  <div className="footer">
   <div>imagenes</div>
   <Link to="/" >
   <Button variant="light" size="sm">Salir</Button>
   </Link>
  </div>
  
)


}
export default Footer