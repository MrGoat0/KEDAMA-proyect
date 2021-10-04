import React from "react";
import Header from "../../shared/Header.jsx";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/listadoVentas.css';
const SalesList = () => {
return(
    <div>
        <body>
    <div class="container-fluid p-0 d-flex flex-column h-100">
    <Header/>
        <div class="container-fluid p-2 d-flex flex-row h-100">
            <div class="search-options-box d-flex flex-column">
                <div class="info-text flex-column px-4 py-3 ">
                    <div class="text-start text-center">
                        <strong>Registro de ventas</strong>
                    </div>
                    <div class="text-below-start text-center">
                        Aquí podrás almacenar cada venta realizada
                    </div>
                </div>
                <div class="search-options d-flex flex-column h-75 m-3 p-2">
                    <div class="d-flex flex-column h-25 rounded">
                        <div class="d-flex flex-column justify-content-center align-items-center h-75">
                            <h1 class="p-2 m-0 text-center text-dark"> <strong>Ventas <br/>Registradas</strong></h1>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center h-25 pt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Visualizar solo ventas actuales
                                </label>
                              </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column h-75 p-2 rounded">
                        <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                            <div class="p-1"> <h5>ID-factura: </h5>  </div>
                            <div class="ps-2">
                                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Identificador"/>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                            <div class="p-1"> <h5>Fecha: </h5> </div>
                            <div class="ps-2">
                                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Fecha de la venta"/>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                            <div class="p-1"> <h5>Usuario: </h5> </div>
                            <div class="ps-2">
                                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Usuario"/>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between p-3 pb-2 px-3">
                            <div class="p-1"> <h5>Producto: </h5> </div>
                            <div class="ps-2">
                                <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Nombre del producto" />
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center p-3">
                            <button type="button" class="btn btn-success">Mostrar</button>
                        </div>

                    </div>

                </div>
            </div>
            <div class="tableView-box d-flex flex-column p-4">
                <div className="d-flex flex-row justify-content-end">
                <VentasNav VentaSwitch={"Management"} />
                </div>
                <div class="tableView d-flex flex-row h-100 p-2 border border">
                    <div class="TableinTouch d-flex border border"></div>
                    <div class="ScrollTable d-flex border border"></div>
                </div>
            </div>
        </div>
        <footer>
            <h1>Gestión de ventas</h1>
        </footer>    
    </div>
    
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
      crossorigin="anonymous">
    </script>
</body>
    </div>
)

}
export default SalesList