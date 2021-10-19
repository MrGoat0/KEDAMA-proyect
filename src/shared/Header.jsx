import React from "react";

import '../styles/shared.css';


const Header = (props) => {
  const { titulo, } = props
  return (
    <div className="header">
      <h1> {titulo} </h1>
    </div>
  )
}
export default Header