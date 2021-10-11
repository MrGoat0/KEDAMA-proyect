import React from "react";
import Header from "../../shared/Header.jsx";
import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/ventas.css';
import '../../styles/Sales/ventas.css';
const Sales = () => {
return(
    <div>
    <body>
    <div class="container-fluid p-0 flex-column h-100">
    <Header/>
    <div className="d-flex flex-row justify-content-between">
        <div class="info-text flex-column px-4 py-3 ">
            <div class="text-start">
                <strong>Registro de ventas</strong>
            </div>
            <div class="text-below-start">
                Aquí podrás almacenar cada venta realizada
            </div>
        </div>
        <VentasNav VentaSwitch={"Register"} />
    </div>
        <div class="container form-container d-flex flex-row px-2 py-4 pb-5 mt-3 mb-4">
            <div class="form-left-side d-flex flex-column p-2 ">
                <div class="form-left-side-title h-25 flex-column ">
                    <h2 class="pt-2 mb-2"> <strong>Información necesaria </strong></h2>
                    <h6 class="pb-2"> Ingrese los campos solicitados para poder registrar correctamente una venta </h6>
                </div>
                <div class="d-flex flex-column h-75">
                    <div class=" form-left-side-user d-flex flex-column ">
                        <div class="p-2 ">
                            <h3>Información del usuario</h3>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-1 ">
                            <div class="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                                <span> <strong>Usuario</strong> </span>
                                <div class="d-flex flex-row">
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Nombre"/>
                                    <button type="button" class="btn btn-outline-secondary">BD</button>
                                </div>
                              </div>
                            <div class="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                                <span> <strong> ID </strong> </span>
                                <div class="d-flex flex-row">
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Identificación"/>
                                </div>
                              </div>
                        </div>
                    </div>
                    <div class="form-left-side-products d-flex flex-column ">
                        <div class="p-2">
                            <h3>Información del producto</h3>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-1 ">
                            <div class="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                                <span> <strong>Producto</strong> </span>
                                <div class="d-flex flex-row">
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Nombre"/>
                                    <button type="button" class="btn btn-outline-secondary">BD</button>
                                </div>
                              </div>
                            <div class="user-button input-group d-flex flex-column px-2 pt-2 pb-2">
                                <span> <strong> ID </strong> </span>
                                <div class="d-flex flex-row">
                                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Identificación"/>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center px-2 py-2">
                    <button type="button" class="btn btn-secondary">Submit</button>
                </div>
            </div>
            <div class="form-right-side d-flex flex-column px-4">
                <div class="form-right-side-title d-flex justify-content-center flex-column align-items-center h-25">
                    <h2 class="pt-2 mb-2"> <strong>Facturación</strong></h2>
                </div>
                <div class="form-right-side-sell d-flex flex-column px-5 py-4 pb-4">
                    <div class="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                        <div class="p-1"> <h5>Fecha: </h5> </div>
                        <div class="p-1"> _________ </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                        <div class="p-1"> <h5>ID-factura: </h5>  </div>
                        <div class="p-1"> _________ </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                        <div class="p-1"> <h5>ID-factura: </h5> </div>
                        <div class="p-1"> _________ </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                        <div class="p-1"> <h5>Producto: </h5> </div>
                        <div class="p-1"> _________ </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between pt-2 pb-2 px-5">
                        <div class="p-1"> <h5>Cantidad: </h5> </div>
                        <div class="p-1"> _________ </div>
                    </div>
                    <div class="d-flex flex-row justify-content-end pt-3 px-5">
                        <div class="me-5"> <h4><strong>TOTAL:</strong> </h4></div>
                        <div class=""> _________ </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </body>
    </div>
  )

}
export default Sales