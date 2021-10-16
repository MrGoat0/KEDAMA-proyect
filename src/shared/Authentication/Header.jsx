import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

import '../../styles/AuthenticationStyle/header.css';


const Header = () => {
  // const [isLoggedIn, setLogin] = useState(false)

  // const login = (response) => {
  //   setLogin(true);
  //   localStorage.setItem('token', response.tokenId)
  // }

  // const loginError = (err) => {
  //   console.log(err);
  // };

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
                <Link to="/categories" >
                  <button type="button" className="btn btn-light mx-2">
                    Login
                  </button>

                  {/* <GoogleLogin
                    clientId="758311109371-ard4nkmjub93unf80oe101fp4anqbr8f.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={login}
                    onFailure={loginError}
                    cookiePolicy={'single_host_origin'}
                    href="/categories"
                  /> */}
                </Link>
                <Link to="/PageNotFound" >
                  <button type="button" className="btn btn-outline-light mx-2">
                    Sign-up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );


}
export default Header