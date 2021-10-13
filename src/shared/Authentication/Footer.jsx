import React from "react";


import '../../styles/AuthenticationStyle/footer.css';


const FooterN = ()=>{
return(
 <div>
      <footer className="text-white">
          <div className="container-fluid d-flex justify-content-center ">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo-image mx-2">
              </div>
              <div className="mx-2">
                Titulo del proyecto
              </div>
              <div className="mx-1">
                <p className="mt-3 text-center">© Proyecto de acceso libre<br/>MINTIC 2021-2</p>
              </div>
            </div>
          </div>
        </footer>
 </div>
)


}
export default FooterN;