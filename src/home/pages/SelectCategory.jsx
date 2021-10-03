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
        <Link to="/categories/users ">
          <Button variant="light" size="lg">Usuarios</Button>
        </Link>
        <Link to="/categories/products" >
          <Button variant="light" size="lg">Productos</Button>
        </Link>
        <Link to="/categories/sales" >
          <Button variant="light" size="lg">Ventas</Button>
        </Link>
      </div>
      <Footer />
    </div>

  )

}
export default Selector