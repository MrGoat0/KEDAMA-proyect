import React from "react";
import { Link } from "react-router-dom";
import '../../styles/category.css';
import { Button } from 'react-bootstrap';
import Header from '../../shared/Header.jsx'
import Footer from '../../shared/Footer.jsx'
const Selector = () => {
  return (

    <div className="container-Category">

      <Header headerText={"Menú"} />
      <div className="grid-buttons">
        <Link to="/categories/users">
        <button  className="each-button">Usuarios</button>
        </Link>
        <Link to="/categories/products" >
          
          <button className="each-button">Productos</button>
        </Link>
        <Link to="/categories/sales" >
        <button  className="each-button">Ventas</button>
        </Link>
      </div>
      <Footer />
    </div>

  )

}
export default Selector