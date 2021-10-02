import React from "react";

import '../styles/shared.css';


const Header = (props) => {
  const { headerTitle } = props;
  return (
    <div className="header">
      <h1> {headerTitle}</h1>
    </div>

  )


}
export default Header