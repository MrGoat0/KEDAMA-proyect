import {React} from "react";
import Header from "../../shared/Authentication/Header";
import FooterN from "../../shared/Authentication/Footer";
import  '../../styles/AuthenticationStyle/Authentication.css';
import example from '../../styles/AuthenticationStyle/images/example.jpeg'


const Authentication = () => {
    return (
      <div>
        {/* <head>
          <title>Sistema de Gestión de Ventas</title>
        </head> */}
        <body>
          <div className="container-fluid flex-column p-0 h-100 bg-light">
            <Header />
            <div className="proyectTitle d-flex justify-content-center">
              <h1 className="text-center p-3 text-dark">Gestión de productos, ventas y usuarios</h1>
            </div>
            <div className="proyect-features flex-column">
              <div className="proyect-info h-100">
                <div className="container h-100">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    <div className="col">
                      <div className="card">
                          <img src={example} alt="example" />
                          <div className="card-body">
                              <p className="card-text">
                                This is a wider card with supporting text below as a
                                natural lead-in to additional content. This content is a
                                little bit longer.
                                </p>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img src={example} alt="example" />
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center"></div>
                        </div>
                    </div>
                </div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <img src={example} alt="example" />
                        <div className="card-body">
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <div className="d-flex justify-content-between align-items-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <FooterN/>
              </div>
            </div>
          </div>
        </body>
      </div>
    );    
    
    }
    export default Authentication