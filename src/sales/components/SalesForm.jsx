/* eslint-disable no-sequences */
import UserForm from "./UserForm";
import ProductsForm from "./ProductsForms ";
import SellerForm from "./SellerForm";
import RecordSaleModal from "../components/RecordSaleModal.jsx";
import React, {useState} from "react";
import '../../styles/Sales/ventas.css';


const SalesForm = (props) => {

      const{userName, product, sellerName, state, properties,
      changeState, setState, setPrice, changeUserName,setUserName,
      changeProduct,setProduct, setMount, changeMount, handleChangeSellerName, setSellerName,
      tableToShow, setSales, missingCell}  = props
      const [show, setShow] = useState(false);
      const handleClose = () => {
        setShow(false);
        document.getElementById("user-form").value = "";
        document.getElementById("seller-form").value = "";
        document.getElementById("state-form").value = "";
        document.getElementById("product-form").value = "";
        document.getElementById("product-mount-form").value = "";
        document.getElementById("user-name").textContent = "";
        document.getElementById("product-description").textContent = "";
        document.getElementById("seller-name").textContent = "";
        setMount("#");       
        setPrice("$");
        setState("ID");
        setUserName("Nombre")
        setSellerName("Vendedor")
        setProduct("Producto")
      }
      const handleShow = () => setShow(true);

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
            <UserForm userName={userName} state={state} tableToShow={tableToShow[0]}  changeState={changeState} changeUserName={changeUserName} missingCell={missingCell.user,missingCell.state}/>
            <SellerForm sellerName={sellerName} tableToShow={tableToShow[2]} handleChangeSellerName={handleChangeSellerName} missingCell={missingCell.seller}/>
          </div>
          <div className="form-left-side-products d-flex flex-column py-2">
            <ProductsForm productShow={product} changeProduct={changeProduct} changeMount={changeMount} tableToShow={tableToShow[1]} missingCell={missingCell.product,missingCell.mount}/>
          </div>
        </div>
        <div className="d-flex justify-content-center pb-3">
          <button type="button" className="btn btn-secondary" onClick={()=>{
            setSales();
            handleShow()}}>
            Submit
          </button>
        </div>
        <RecordSaleModal properties={properties} show={show} onHide={handleClose}/>
      </div>
    );
}

export default SalesForm