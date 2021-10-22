import React from "react";
import Header from "../../shared/Header.jsx";
import SalesForm from "../components/SalesForm";
import SalesBill from "../components/SalesBill";
import {useState,useEffect} from 'react';
// import Footer from "../../shared/Footer";
import VentasNav from "../components/VentasNav"
import '../../styles/Sales/ventas.css';
import '../../styles/Sales/ventas.css';
import Footer from "../../shared/Footer.jsx";
import api from "../../api.js"
const Sales = () => {

    //Why does this two hooks exist, they can be deleted and just use sellerName and product
    //Dont touch it 'till we know why
    const [recordUser,setrecordUser] = useState("Nombre");
    const [recordProduct,setrecordProduct] = useState("Producto");
    const [recordSeller,setRecordSeller] = useState("Vendedor");

    //Change in bill with typing in form
    const [sellerName,setSellerName] = useState(recordSeller);
    const [price,setPrice] = useState("$")
    const [userName,setUserName] = useState(recordUser)
    const [state,setState] = useState("NA");
    const [product,setProduct] = useState(recordProduct)
    const [mount,setMount] = useState("#")
    const total = parseInt(mount) * parseInt(price);
    const date = new Date().toLocaleDateString();
    
    //To get from API 
    const [users,setUsers] = useState([])
    const [products,setProducts] = useState([])
    const [seller,setSeller] = useState([])
    const [salesInDb,setSalesInDb] = useState([])

      //consuming API
      useEffect(()=>{
        async function fetchData(){
          const responseUsers = await api.users.getAllUsers();
          const responseProduct = await api.products.list();
          const responseSales = await api.sales.list();
          setUsers(responseUsers);
          setProducts(responseProduct);
          setSeller(responseUsers);
          setSalesInDb(responseSales);
        }
        fetchData();
      },[])
      //

      //search en API data
      // const searchClientAndSeller = (users) =>{
      //   let userToAddName = null;
      //   let userToAddID = null;
      //   let sellerToAdd= null;
      //   if(users !== null || users.length > 0){
      //     for(var indexU = 0; indexU < users.length; indexU++){
      //       if(users[indexU]._id === userName){
      //         userToAddName = users[indexU].name;
      //         userToAddID = users[indexU]._id;
      //       }
      //       if(users[indexU]._id === sellerName){
      //         sellerToAdd = users[indexU]._id
      //       }
      //     }
      //   }
        
      //   return [userToAddName,userToAddID,sellerToAdd]
      // }

      // const searchProducts = (products)=>{
      //   let productToAdd = null;
      //   if(products !== null || products.length > 0){
      //     for(var indexP = 0; indexP < products.length; indexP++){
      //       if(products[indexP].id === parseInt(product)){
      //         productToAdd = products[indexP]._id;     
      //       }
      //     }
      //   }
      //   return productToAdd  
      // }
      //
      const [saleRecorded, setSaleRecorded] = useState({
        state: state,
            productInfo: null,
            quantity: mount,
            total: total,
            date: date,
            clientName: null,
            clientId: userName,
            seller: null
      });
  
    //Change info seemed in bill
    const handleChangePrice = (value) => {
      const product = parseInt(value)
      if(products !== null || products.length > 0){
        for(var index = 0; index < products.length; index++){
          if(products[index].id === product){
            setPrice(products[index].price);      
          }
        }
      }  
    }
    const handleChangeState = (event) => {
        setState(event.target.value)      
    }
    const handleChangeUserName = (event) => {
        setUserName(event.target.value)      
    }
    const handleChangeProduct = (event) => {
        setProduct(event.target.value)
        handleChangePrice(event.target.value)
    }
    const handleChangeSellerName = (event) => {
      setSellerName(event.target.value);
    }
    const handleChangeMount = (event) => {
        setMount(event.target.value)
    }
    //
    //keep the value typed in modal 
    const handleRecordUser= (event) =>{
        setrecordUser(event.target.value)
        handleChangeUserName(event)
      }
    const handleRecordProduct= (event) =>{
        setrecordProduct(event.target.value)
        handleChangeProduct(event)
    }
    const handleRecordSeller = (event) =>{
        setRecordSeller(event.target.value)
        handleChangeSellerName(event)
    }
    //
    //   getting complete user info  
      const createSale = () =>{

        var userToAddName = null;
        var userToAddID = null;
        var productToAdd = null;
        var sellerToAdd = null;
        

        if(users !== null || users.length > 0){
          for(var indexU = 0; indexU < users.length; indexU++){
            if(users[indexU]._id === userName){
              userToAddName = users[indexU].name;
              userToAddID = users[indexU]._id;
            }
            if(users[indexU]._id === sellerName){
              sellerToAdd = users[indexU]._id
            }
          }
        }  

        if(products !== null || products.length > 0){
          for(var indexP = 0; indexP < products.length; indexP++){
            if(products[indexP].id === parseInt(product)){
              productToAdd = products[indexP]._id;     
            }
          }
        }  
        
        setSaleRecorded({
          state: state,
          productInfo: productToAdd,
          quantity: mount,
          total: total,
          date: date,
          clientName: userToAddName,
          clientId: userToAddID,
          seller: sellerToAdd
      })
          // calcular y mostrar el precio en bill, mandar el registro a la 
        //base de datos
      }

    const handleChangeAndClick = (event) => {
      createSale();
      console.log(saleRecorded)
      // eslint-disable-next-line no-restricted-globals
      var mensaje = confirm("Estas seguro de registrar esta información?");
      if((saleRecorded.clientName !== null) && (saleRecorded.productInfo !== null) && (saleRecorded.seller !== null)){
        // if(!salesInDb.includes(saleRecorded)) {
        //   }
        if(mensaje){
          alert("¡Gracias por aceptar!");
          api.sales.create(saleRecorded);
          // setSaleRecorded({...saleRecorded,[event.target.id]: event.target.value});
          setMount("#");       //Por cierto, por que hay un delay al iniciar el envío con submit
          setProduct("Producto");
          setPrice("$");
          setUserName("Nombre");
          setState("ID");
          setSellerName("Vendedor");
          document.getElementById("product-mount").value = "";
          document.getElementById("state-form").value = "";
        
        }else{  
          alert("¡Haz denegado la acción!");
        }
        
    }
  }
    

return(
    <div>
    <body>
    <div class="container-fluid p-0 flex-column h-100">
    <Header headerText={"Registro de ventas"} />
    <div className="d-flex flex-row justify-content-between">
        <div className="info-text flex-column px-4 py-3">
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
            <SalesForm userName={userName} product={product} sellerName={sellerName}
            changeState={handleChangeState} changePrice={handleChangePrice} changeUserName={handleChangeUserName} 
            changeProduct={handleChangeProduct} changeMount={handleChangeMount} handleChangeSellerName={handleChangeSellerName} 
            tableToShow={[users,products,seller]} setSales={handleChangeAndClick} 
            handleRecord={[handleRecordUser,handleRecordProduct,handleRecordSeller]}
            />
            <SalesBill date={date} price={price} state={state} userName={userName} product={product} mount={mount} sellerName={sellerName} total={total}/>
        </div>
    </div>
    <Footer/>
    </body>
    </div>
  )

}
export default Sales