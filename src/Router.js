import React,{useState} from "react";

import Category from "./home/pages/SelectCategory.jsx";
import Authentication from "./home/pages/Authentication.jsx";
import About from "./home/pages/About.jsx";
import Products from "./products/pages/Products.jsx";
import RegisterProducts from "./products/pages/ProductsList.jsx";
import RegisterSales from "./sales/pages/Sales.jsx";
import SalesList from "./sales/pages/SalesList.jsx";
import Users from "./users/pages/Users.jsx";
import NotFound from "./shared/NotFound.jsx";
import "./styles/index.css";
import Updateinfousers from "./users/pages/Updateinfousers.jsx";
import Updaterolusers from "./users/pages/Updaterolusers.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const recordsSales = [{
  index: 1,
  fecha: "02/01/2021",
  usuario:"MasterFill",
  productos: "[producto #]",
  precio: "10000",
},{
  index: 2,
  fecha: "01/01/2021",
  usuario:"Vicky",
  producto: "arepa",
  precio: "10000",
},{
  index: 3,
  fecha: "02/01/2021",
  usuario:"Miguel",
  producto: "huevo",
  precio: "10000",
},{
  index: 4,
  fecha: "02/01/2021",
  usuario:"MasterFill",
  producto: "[producto #]",
  precio: "10000",
},{
  index: 5,
  fecha: "01/01/2021",
  usuario:"Lina",
  producto: "huevo",
  precio: "10000",
}]

const recordsUsers = [{
  index: 1,
  usuario:"MasterFill",
  rol:"administrador"
},{
  index: 2,
  usuario:"vicky",
  rol:"usuario"
},{
  index: 4,
  usuario:"Lina",
  rol:"vendedor"
},{
  index: 5,
  usuario:"Miguel",
  rol:"administrador"
}]

const recordsProducts = [{
  index: 1,
  producto: "producto #",
  precio:"0000",
  estado:"NN",
},{
  index: 2,
  producto: "producto #",
  precio:"0000",
  estado:"NN",
},{
  index: 3,
  producto: "producto #",
  precio:"0000",
  estado:"NN",
},{
  index: 4,
  producto: "producto #",
  precio:"0000",
  estado:"NN",
},{
  index: 5,
  producto: "producto #",
  precio:"0000",
  estado:"NN",
}]



function App() {
  
  const [sales,setSales] = useState(recordsSales);
  
  const handleSubmitRecords =(newSale)=>{
    setSales([...sales, newSale]);
    // console.log(newSale, "newsale")
  }


  return (
    <div className="container2">
      <Router>
        <Switch>
          <Route exact path="/" component={Authentication} />
          <Route exact path="/About" component={About} />
          <Route exact path="/categories" component={Category} />
          <Route
            exact
            path="/categories/users/updateinfousers"
            component={Updateinfousers}
          />

          <Route
            exact
            path="/categories/users/updaterolusers"
            component={Updaterolusers}
          />

          <Route exact path="/categories/users" component={Users} />
          {/* <Route
            exact
            path="/categories/users/Listusers"
            component={ListUsers}
          /> */}
          <Route exact path="/categories/products" component={Products} />
          <Route
            exact
            path="/categories/update_products"
            component={RegisterProducts}
          />

          <Route exact path="/categories/sales">
            <RegisterSales products={recordsProducts} setSales={handleSubmitRecords} users={recordsUsers} />
          </Route>
          <Route exact path="/categories/register_sales">
            <SalesList sales={sales} setSales={setSales}/>
            {/* {console.log(recordsSales)} */}
          </Route>

          <Route exact path="/categories/users" component={Users} />
          <Route exact path="/" component={Authentication} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
