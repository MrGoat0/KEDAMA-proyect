import React from "react";
import { Link } from "react-router-dom";
import HeaderButtons from "./HeaderButtons"


import '../../styles/AuthenticationStyle/header.css';


const Header = (props) => {
  const { isLoggedIn, setLogin, setValidate } = props;

  return (
    <div>
      <header className="p-2 text-white">
        <div className="container w-100">
          <div className=" row align-items-center justify-content-center">
            {/* <a href="/" className=" d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></a> */}
            <ul className=" nav col-4 mb-2 justify-content-center ">
              <div className="row justify-content-start">
                <li>
                  <Link to="/">
                    <span className="nav-link ml-2 mt-2 px-0 text-white">Home&nbsp;</span>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <span className="nav-link mr-2 mt-2 px-0 text-white">|&nbsp;About</span>
                  </Link>
                </li>
              </div>
            </ul>

            <div className="col col-8">
              <div className="row justify-content-end">
                <HeaderButtons isLoggedIn={isLoggedIn}
                  setLogin={setLogin} setValidate={setValidate} />

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );


}
export default Header