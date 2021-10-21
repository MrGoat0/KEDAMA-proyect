import React from "react";

import '../styles/shared.css';


const Header = (props) => {

  const { headerText } = props;
  return (
    <div className="header">

      <h1> {headerText} </h1>
    </div>
  )
}
export default Header