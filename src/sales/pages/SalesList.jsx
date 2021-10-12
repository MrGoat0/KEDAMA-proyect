import React from "react";
import Header from "../../shared/Header.jsx";
// import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import SalesTable from "../components/TableWithSales"
import '../../styles/Sales/listadoVentas.css';
import Table from 'react-bootstrap/Table'
const SalesList = () => {
  const records = [{
    index: "1",
    fecha: "01/01/2021",
    usuario:"MasterFill",
    producto: "producto #",
    cantidad: "10000",
},{
    index: "1",
    fecha: "01/01/2021",
    usuario:"MasterFill",
    producto: "producto #",
    cantidad: "10000",
},{
    index: "1",
    fecha: "01/01/2021",
    usuario:"MasterFill",
    producto: "producto #",
    cantidad: "10000",
},{
    index: "1",
    fecha: "01/01/2021",
    usuario:"MasterFill",
    producto: "producto #",
    cantidad: "10000",
},{
    index: "1",
    fecha: "01/01/2021",
    usuario:"MasterFill",
    producto: "producto #",
    cantidad: "10000",
}]
return(
    <div>
        <body>
    <div class="container-fluid p-0 d-flex flex-column h-100">
    <Header/>

        <div class="container-fluid p-2 pb-4 d-flex flex-row h-100">
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
                <div className="tableView d-flex flex-row h-100 p-2 border border">
                    <div className="TableinTouch d-flex flex-column p-5 border border">
                      <div>
                      <Table striped bordered hover>
                        <SalesTable recordsData={records} />
                      </Table>
                      </div>
                    {/* <table class="table-responsive-xxl table-striped table-hover ">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Fecha</th>
      <th scope="col">Usuario</th>
      <th scope="col">Producto</th>
      <th scope="col">cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">16</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">17</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">18</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">19</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">20</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">21</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">22</th>
      <td>01/01/2021</td>
      <td>producto #</td>
      <td>MasterFill</td>
      <td>10000</td>
    </tr>
    
  </tbody>
</table> */}
        
                    </div>
                    <div class="ScrollTable d-flex border border"></div>
                </div>
            </div>   
        </div>
        {/* <div className="d-flex flex-row p-5">
        <Footer />
        </div> */}
    </div>
</body>
    </div>
)

}
export default SalesList