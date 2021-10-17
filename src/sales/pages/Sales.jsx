import React from "react";
import Header from "../../shared/Header.jsx";
import SalesForm from "../components/SalesForm";
import SalesBill from "../components/SalesBill";
import {useState} from 'react';
// import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/ventas.css';
import '../../styles/Sales/ventas.css';
import Footer from "../../shared/Footer.jsx";
const Sales = ({products,setSales,users}) => {

    const [userID,setUserID] = useState("----")
    const [userName,setUserName] = useState("----")
    const [product,setProduct] = useState("----")
    const [mount,setMount] = useState("----")
    const [saleRecorded, setSaleRecorded] = useState({
        index: products[products.length - 1].index + 1,
        fecha: "01/01/2021",
        usuario: userID,
        productos: product,
        precio: "10000",
      });
  
    const handleChangeUserID = (event) => {
        setUserID(event.target.value)      
    }
    const handleChangeUserName = (event) => {
        setUserName(event.target.value)      
    }
    const handleChangeProduct = (event) => {
        setProduct(event.target.value)
    }
    const handleChangeMount = (event) => {
        setMount(event.target.value)
    }

    const handleChangeAndClick = (event) => {
        setSaleRecorded({...saleRecorded,[event.target.id]: event.target.value});
        setSales(...products,saleRecorded); //según entiendo, esty mandandole saleRecorded a newSale, no?
        setMount("----");       //Por cierto, por que hay un delay al iniciar el envío con submit
        setProduct("----");
        setUserID("----");
        setUserName("----");
        document.getElementById("user-form").value=""; //Como hago para poner el mismo estilo que el input inicial
        document.getElementById("ID-user-form").value="";
        document.getElementById("product-form").value="";
        document.getElementById("ID-product-form").value="";
        document.getElementById("product-mount").value = ""; 
        // console.log(saleRecorded);
        // console.log(sales);
        // console.log(products[products.length - 1].index.typeof);
    }
    

return(
    <div>
    <body>
    <div class="container-fluid p-0 flex-column h-100">
    <Header headerText={"Registro de ventas"} />
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
        {/* changeUserID={handleChangeUserID} changeProduct={handleChangeProduct} changeMount={handleChangeMount} */}
            <SalesForm changeUserID={handleChangeUserID} changeUserName={handleChangeUserName} changeProduct={handleChangeProduct} changeMount={handleChangeMount} products={products} setSales={handleChangeAndClick} users={users}/>
            <SalesBill userID={userID} userName={userName} product={product} mount={mount} />
        </div>
    </div>
    <Footer/>
    </body>
    </div>
  )

}
export default Sales