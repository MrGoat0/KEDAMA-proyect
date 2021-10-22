import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/category.css';
import Header from '../../shared/Header.jsx'
import Footer from '../../shared/Footer.jsx'

const Selector = (props) => {
  const { validate } = props;
  return (
    <div className="container-Category">

      <Header headerText={"Menú"} />
      <div className="grid-buttons">
        <Link to="/categories/users">
          <button disabled={!validate} className="each-button">Usuarios</button>
        </Link>

        <Link to="/categories/sales" >
          <button className="each-button">Ventas</button>
        </Link>

        <Link to="/categories/products" >
          <button disabled={!validate} className="each-button">Productos</button>
        </Link>

      </div>
      <Footer />
    </div>

  )
}
export default Selector