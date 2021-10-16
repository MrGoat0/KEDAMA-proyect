import React, { useState, useEffect } from "react";
import Category from "./home/pages/SelectCategory.jsx";
import Authentication from "./home/pages/Authentication.jsx";
import About from "./home/pages/About.jsx";
import Products from "./products/pages/Products.jsx";
import Sales from "./sales/pages/Sales.jsx";
import RegisterSales from "./sales/pages/SalesList.jsx";
import Users from "./users/pages/Users.jsx";
import NotFound from "./shared/NotFound.jsx";
import "./styles/index.css";
import Updateinfousers from "./users/pages/Updateinfousers.jsx";
import Updaterolusers from "./users/pages/Updaterolusers.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);

  return (
    <div className="container2">
      <Router>
        <Switch>
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

          <Route exact path="/">
            <Authentication isLoggedIn={isLoggedIn} setLogin={setLogin} />
          </Route>

          <Route exact path="/About" component={About} />

          <Route exact path="/categories">
            <Category />
          </Route>

          <Route exact path="/categories/products" component={Products} />
          <Route exact path="/categories/sales" component={Sales} />
          <Route
            exact
            path="/categories/register_sales"
            component={RegisterSales}
          />

          <Route exact path="/categories/users" component={Users} />
          <Route exact path="/" component={Authentication} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
