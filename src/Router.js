import React from "react";

import Category from "./home/pages/SelectCategory.jsx";
import Authentication from "./home/pages/Auth.jsx";
import Products from "./products/pages/Products.jsx";
import RegisterProducts from "./products/pages/ProductsList.jsx";
import Sales from "./sales/pages/Sales.jsx";
import RegisterSales from "./sales/pages/SalesList.jsx";
import Edit from "./sales/components/edit.jsx";
import Users from "./users/pages/Users.jsx";
import NotFound from "./shared/NotFound.jsx";
import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="container2">
      <Router>
        <Switch>
          <Route exact path="/categories" component={Category} />
          <Route exact path="/categories/products" component={Products} />
          <Route
            exact
            path="/categories/register_products"
            component={RegisterProducts}
          />
          <Route exact path="/categories/sales" component={Sales} />
          <Route exact path="/categories/sales/edit" component={Edit} />
          <Route
            exact
            path="/categories/register_sales"
            component={RegisterSales}
          />
          <Route exact path="/categories/users " component={Users} />
          <Route exact path="/" component={Authentication} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
