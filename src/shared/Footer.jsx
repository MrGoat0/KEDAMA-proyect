import React from "react";
import { Button } from 'react-bootstrap';
import '../styles/shared.css';
import { Link } from "react-router-dom";
import face from '../../src/img/face.png'
import insta from '../img/instagram.png';
import twitter from '../img/twitter.png';
const Footer = () => {
  return (
    <div className="footer fixed-bottom">
      <div className="containerSM"><div><img src={face}  /></div>  <div><img src={insta}  /></div> <div><img src={twitter}  /></div></div>
      <div className="tomenu">
      <Link to="/categories" >
        <Button variant="light" size="sm">Menu Principal</Button>
      </Link>
      <Link to="/" >
        <Button variant="light" size="sm">Salir</Button>
      </Link>
     
      </div>
    </div>

  )


}
export default Footer