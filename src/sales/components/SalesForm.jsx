
import UserForm from "./UserForm";
import ProductsForm from "./ProductsForms ";
// import React, {useState} from "react";
import '../../styles/Sales/ventas.css';

const SalesForm = (props) => {

    const {changePrice,changeUserName, changeProduct, 
      changeMount, products, setSales,users,
      handleRecord,userName, product} = props;

    return (
      <div className="form-left-side d-flex flex-column p-2 ">
        <div className="form-left-side-title h-25 flex-column ">
          <h2 className="pt-2 mb-2">
            {" "}
            <strong>Información necesaria </strong>
          </h2>
          <h6 className="pb-2">
            {" "}
            Ingrese los campos solicitados para poder registrar correctamente
            una venta{" "}
          </h6>
        </div>
        <div className="d-flex flex-column h-75">
          <div className=" form-left-side-user d-flex flex-column py-3">
            <UserForm userName={userName} changeUserID={changePrice} changeUserName={changeUserName} users={users} handleRecord={handleRecord[0]}/>
          </div>
          <div className="form-left-side-products d-flex flex-column py-3">
            <ProductsForm product={product} changeProduct={changeProduct} changeMount={changeMount} products={products} handleRecord={handleRecord[1]}/>
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