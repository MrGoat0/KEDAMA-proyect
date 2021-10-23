
import UserForm from "./UserForm";
import ProductsForm from "./ProductsForms ";
import SellerForm from "./SellerForm";
// import React, {useState} from "react";
import '../../styles/Sales/ventas.css';


const SalesForm = (props) => {

    const {changeState, changeUserName, changeProduct, 
      changeMount, setSales,
      handleChangeSellerName,userName, product, sellerName,tableToShow} = props;

    return (
      <div className="form-left-side d-flex flex-column p-2 ">
        <div className="form-left-side-title h-25 flex-column ">
          <h2 className="">
            {" "}
            <strong>Información necesaria </strong>
          </h2>
          <h6>
            {" "}
            Ingrese los campos solicitados para poder registrar correctamente
            una venta{" "}
          </h6>
        </div>
        <div className="d-flex flex-column h-75">
          <div className=" form-left-side-user d-flex flex-column py-2">
            <UserForm userName={userName} tableToShow={tableToShow[0]}  changeState={changeState} changeUserName={changeUserName} />
            <SellerForm sellerName={sellerName} tableToShow={tableToShow[2]} handleChangeSellerName={handleChangeSellerName} />
          </div>
          <div className="form-left-side-products d-flex flex-column py-2">
            <ProductsForm productShow={product} changeProduct={changeProduct} changeMount={changeMount} tableToShow={tableToShow[1]} />
          </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
          <button type="button" className="btn btn-secondary" onClick={setSales}>
            Submit
          </button>

          
        </div>
      </div>
    );
}

export default SalesForm