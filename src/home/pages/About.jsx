import { React } from "react";
import Header from "../../shared/Authentication/Header";
import FooterN from "../../shared/Authentication/Footer";
import "../../styles/AuthenticationStyle/about.css";
import mateo from "../../img/mcr-photo.jpg"

const About = (props) => {
  const { isLoggedIn, setLogin, setValidate } = props;
  return (
    //     <div>
    //         Esta es la de autorizacion
    //         <div classNameNameName='buttons'>
    //    <Link to="/categories" >
    //    <button>Inicio de sesion</button>
    //    </Link>
    //  </div>
    //     </div>
    <div>
      <body className="bg-light">
        <div className="container-fluid flex-column p-0 h-100">
          <Header isLoggedIn={isLoggedIn}
            setLogin={setLogin} setValidate={setValidate} />
          <div className="proyectTitle d-flex justify-content-center">
            <h1 className="text-center p-3 pt-4 text-dark">SOBRE LOS AUTORES...</h1>
          </div>
          <div className="text-center px-5">
            El proyecto de "Titulo del proyecto" hace parte del desarrollo del
            curso dictado por el Ministerio de Tecnologías de la Información y
            la Comunicación (MINTIC). Los autores que han desarrolado este
            sistema de gestión de ventas son:
          </div>
          <div className="proyect-authors flex-column">
            <div className="up-authors row mt-4 mb-5 w-100 ">
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg
                    className="bd-placeholder-img rounded-circle m-1"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h3 className="text-center">Diego Marin Jaramillo</h3>
                  <span>e-mail: dimarka14@gmail.com</span>
                </div>
              </div>
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg
                    className="bd-placeholder-img rounded-circle m-1"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h3 className="text-center">Luis Armando Bedoya Osorio</h3>
                  <span>e-mail: bedoyaosoriolabo550@gmail.com</span>
                </div>
              </div>
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg
                    className="bd-placeholder-img rounded-circle m-1"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h3 className="text-center">Laura Cardenas</h3>
                  <span>e-mail: laura.carfolacam@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="down-authors row mt-5 mb-5 w-100 ">
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg width="140" height="140">
                    <defs>
                      <clipPath id="circleView">
                        <circle cx="70" cy="70" r="70" fill="#FFFFFF" />
                      </clipPath>
                    </defs>
                    <image
                      width="140"
                      height="140"
                      href={mateo}
                      clip-path="url(#circleView)"
                    />
                  </svg>
                  <h3 className="text-center">Mateo Cardona Rincon</h3>
                  <span>e-mail: mcardonari@unal.edu.co</span>
                </div>
              </div>
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg
                    class="bd-placeholder-img rounded-circle m-1"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h3 class="text-center">Miguel Angel López Fernández</h3>
                  <span>e-mail: miguel.lopez@utp.edu.co</span>
                </div>
              </div>
              <div className="col-lg-2 mx-auto">
                <div className="text-center">
                  <svg
                    className="bd-placeholder-img rounded-circle m-1"
                    width="140"
                    height="140"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 140x140"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#777" dy=".3em">
                      140x140
                    </text>
                  </svg>
                  <h3 className="text-center">Kevin Sebastian Barrera</h3>
                  <span>e-mail: kbarrerac@unal.edu.co</span>
                </div>
              </div>
            </div>
            <FooterN />
          </div>
        </div>
      </body>
    </div>
  );
};
export default About;
