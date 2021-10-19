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
import api from "../../api.js"
const Sales = ({products,users}) => {

    const [recordUser,setrecordUser] = useState("Nombre");
    const [recordProduct,setrecordProduct] = useState("Producto");
    const [price,setPrice] = useState("----")
    const [userName,setUserName] = useState(recordUser)
    const [product,setProduct] = useState(recordProduct)
    const [mount,setMount] = useState("----")
    const [saleRecorded, setSaleRecorded] = useState({
        date: "01/01/2021",
        // usuario: userID,
        productos: product,
        precio: "10000",
      });
  
    const handleChangePrice = (event) => {
        setPrice(event.target.value)      
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
    const handleRecordUser= (event) =>{
        setrecordUser(event.target.value)
        handleChangeUserName(event)
        // document.getElementById("user-form").placeholder = userName; //Como hago para poner el mismo estilo que el input inicial
        // document.getElementById("ID-user-form").placeholder= userName;
      }
      const handleRecordProduct= (event) =>{
        setrecordProduct(event.target.value)
        handleChangeProduct(event)
        // document.getElementById("product-form").placeholder=product;
        // document.getElementById("ID-product-form").placeholder=product;
      }

    //   getting complete user info
      const userToAdd = api.users.list()
      
    //   console.log(userToAdd)
    const handleChangeAndClick = (event,userToAdd,productToAdd) => {
        // api.sales.create(saleRecorded);
        setSaleRecorded({...saleRecorded,[event.target.id]: event.target.value});
        // setMount("----");       //Por cierto, por que hay un delay al iniciar el envío con submit
        // setProduct("----");
        // setPrice("----");
        // setUserName("----");
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
            <SalesForm userName={userName} product={product} 
            changePrice={handleChangePrice} changeUserName={handleChangeUserName} 
            changeProduct={handleChangeProduct} changeMount={handleChangeMount} 
            products={products} setSales={handleChangeAndClick} users={users} 
            handleRecord={[handleRecordUser,handleRecordProduct]}/>
            <SalesBill price={price} userName={userName} product={product} mount={mount} />
        </div>
    </div>
    <Footer/>
    </body>
    </div>
  )

}
export default Sales