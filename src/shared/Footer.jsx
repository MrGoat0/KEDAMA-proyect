import React from "react";
import { Button } from "react-bootstrap";
import "../styles/shared.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center">
        Proyecto desarrollado KEDAMA. MIN TIC 2022
      </div>
      <Link to="/">
        <Button variant="light" size="small">
          Salir del sistema
        </Button>
      </Link>
    </div>
  );
};
export default Footer;
