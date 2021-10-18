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
import PrivateRoute from "./shared/PrivateRoute";
import PrivateRouteRoles from "./shared/PrivateRouteRoles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [validate, setValidate] = useState(true);

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
          <PrivateRouteRoles
            path="/categories/products"
            validate={validate}
            setValidate={setValidate}
          >
            <Route exact path="/categories/products" component={Products} />
          </PrivateRouteRoles>

          <PrivateRouteRoles
            path="/categories/users/updateinfousers"
            validate={validate}
            setValidate={setValidate}
          >
            <Route
              exact
              path="/categories/users/updateinfousers"
              component={Updateinfousers}
            />
          </PrivateRouteRoles>

          <PrivateRouteRoles
            path="/categories/users/updaterolusers"
            validate={validate}
            setValidate={setValidate}
          >
            <Route
              exact
              path="/categories/users/updaterolusers"
              component={Updaterolusers}
            />
          </PrivateRouteRoles>

          <PrivateRouteRoles
            path="/categories/users"
            validate={validate}
            setValidate={setValidate}
          >
            <Route exact path="/categories/users" component={Users} />
          </PrivateRouteRoles>

          <PrivateRoute
            path="/categories/sales"
            validate={validate}
            setValidate={setValidate}
            exact
          >
            <Route exact path="/categories/sales" component={Sales} />
          </PrivateRoute>

          <PrivateRoute
            path="/categories/register_sales"
            validate={validate}
            setValidate={setValidate}
          >
            <Route
              exact
              path="/categories/register_sales"
              component={RegisterSales}
            />
          </PrivateRoute>

          <PrivateRoute
            path="/categories"
            validate={validate}
            setValidate={setValidate}
          >
            <Route exact path="/categories">
              <Category />
            </Route>
          </PrivateRoute>

          <Route exact path="/About">
            <About isLoggedIn={isLoggedIn} setLogin={setLogin} />
          </Route>

          <Route exact path="/">
            <Authentication isLoggedIn={isLoggedIn} setLogin={setLogin} />
          </Route>

          <Route exact path="/" component={Authentication} />

          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
