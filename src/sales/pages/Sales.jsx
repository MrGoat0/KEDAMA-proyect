import React from "react";
import Header from "../../shared/Header.jsx";
import SalesForm from "../components/SalesForm";
import SalesBill from "../components/SalesBill";
import { useState, useEffect } from 'react';
import VentasNav from "../components/VentasNav"
import Footer from "../../shared/Footer.jsx";
import api from "../../api.js"
import '../../styles/Sales/ventas.css';
const Sales = () => {
  //To get from API 
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [seller, setSeller] = useState([])
  const [missingCell, setMissingCell] = useState({ user: false, state: false, seller: false, product: false, mount: false })

  async function fetchData() {
    const responseUsers = await api.users.getAllUsers();
    const responseProduct = await api.products.list();
    setUsers(responseUsers);
    setProducts(responseProduct);
    setSeller(responseUsers);
  }
  //consuming API
  useEffect(() => {
    fetchData();
  }, [])


  //Change in bill with typing in form
  const [sellerName, setSellerName] = useState("Vendedor");
  const [price, setPrice] = useState("$")
  const [userName, setUserName] = useState("Nombre")
  const [state, setState] = useState("V/NV");
  const [product, setProduct] = useState("Producto")
  const [mount, setMount] = useState("#")
  let total = parseInt(mount) * parseInt(price);
  let date = new Date().toLocaleDateString();
  const [properties, setProperties] = useState({ type: "", saleID: "" })


  //Change info seemed in bill
  const handleChangePrice = (value) => {
    const product = value
    if (products !== null || products.length > 0) {
      for (var index = 0; index < products.length; index++) {
        if (products[index]._id === product) {
          setPrice(products[index].price);
        }
      }
    }
  }
  const handleChangeState = (event) => {
    setState(event.target.value)
  }
  const handleChangeUserName = (change) => {
    setUserName(change)
  }
  const handleChangeProduct = (change) => {
    setProduct(change)
    handleChangePrice(change)
  }
  const handleChangeSellerName = (change) => {
    setSellerName(change);
  }
  const handleChangeMount = (event) => {
    setMount(event.target.value)
  }


  //   getting complete user info  
  const createSale = () => {
    var userToAddName = null;
    var userToAddID = null;
    var productToAdd = null;
    var sellerToAdd = null;


    if (users !== null || users.length > 0) {
      for (var indexU = 0; indexU < users.length; indexU++) {
        if (users[indexU]._id === userName) {
          userToAddName = users[indexU].name;
          userToAddID = users[indexU]._id;
        }
        if (users[indexU]._id === sellerName) {
          sellerToAdd = users[indexU]._id
        }
      }
    }

    if (products !== null || products.length > 0) {
      for (var indexP = 0; indexP < products.length; indexP++) {
        if (products[indexP]._id === product) {
          productToAdd = products[indexP]._id;
        }
      }
    }
    let SaleRecorded = {
      state: state,
      productInfo: productToAdd,
      quantity: mount,
      total: total,
      date: date,
      clientName: userToAddName,
      clientId: userToAddID,
      seller: sellerToAdd
    }
    return SaleRecorded
    // calcular y mostrar el precio en bill, mandar el registro a la 
    //base de datos
  }

  const handleChangeAndClick = (event) => {
    // eslint-disable-next-line no-restricted-globals
    if ((userName !== "Nombre") && (state !== "V/NV") && (sellerName !== "Vendedor") && (product !== "Producto") && (mount !== "#")) {
      let SaleRecorded = createSale();
      // eslint-disable-next-line no-restricted-globals
      setMissingCell({ user: false, state: false, seller: false, product: false, mount: false })
      setProperties({ type: "SaleRecorded", saleID: "" })
      api.sales.create(SaleRecorded).then(
        (res) => {
          setProperties({ type: "SaleRecorded", saleID: res })
        }).catch((err) => { console.log(err) })
    } else {
      setProperties({
        type: "warning",
        saleID: api,
      }
      )
      setMissingCell({ user: true, state: true, seller: true, product: true, mount: true })
    }
  }

  return (
    <div className="container-main container-fluid p-0 flex-column h-100">
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
        <SalesForm userName={userName} product={product} sellerName={sellerName} state={state} properties={properties}
          changeState={handleChangeState} setState={setState} setPrice={setPrice} changeUserName={handleChangeUserName} setUserName={setUserName}
          changeProduct={handleChangeProduct} setProduct={setProduct} changeMount={handleChangeMount} setMount={setMount} handleChangeSellerName={handleChangeSellerName}
          setSellerName={setSellerName} tableToShow={[users, products, seller]} setSales={handleChangeAndClick} missingCell={missingCell}
        />
        <SalesBill date={date} price={price} state={state} userName={userName} product={product} mount={mount} sellerName={sellerName} total={total} />
      </div>
      <Footer />
    </div>
  )

}
export default Sales