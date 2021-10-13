import React from "react";
import Header from "../../shared/Header.jsx";
import SalesForm from "../components/SalesForm";
import SalesBill from "../components/SalesBill";
import {useState} from 'react';
// import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/ventas.css';
const Sales = () => {

    const [userID,setUserID] = useState("")
    const [product,setProduct] = useState("")
    const [mount,setMount] = useState("")
    const date = new Date().toLocaleDateString() + "-- " + new Date().toLocaleTimeString();
    // const dateString = Object.freeze(date)
    const handleChangeUserID = (event) => {
        setUserID(event.target.value)      
    }
    const handleChangeProduct = (event) => {
        setProduct(event.target.value)
    }
    const handleChangeMount = (event) => {
        setMount(event.target.value)
    }
  

return(
    <div>
    <body>
    <div className="container-fluid p-0 flex-column h-100">
    <Header/>
    <div className="d-flex flex-row justify-content-between">
        <div className="info-text flex-column px-4 py-3 ">
            <div className="text-start">
                <strong>Registro de ventas</strong>
            </div>
            <div className="text-below-start">
                Aquí podrás almacenar cada venta realizada
            </div>
        </div>
        <VentasNav VentaSwitch={"Register"} />
    </div>
        <div className="container form-container d-flex flex-row px-2 py-4 pb-5 mt-3 mb-4">
            <SalesForm changeUserID={handleChangeUserID} changeProduct={handleChangeProduct} changeMount={handleChangeMount}/>
            {console.log("aquí")}
            <SalesBill userID={userID} product={product} mount={mount} date={date}/>
        </div>
    </div>
    {/* <Footer/> */}
    </body>
    </div>
  )

}
export default Sales