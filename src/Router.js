import React, { useState, useEffect } from "react";
import PrivateRouteRoles from "./shared/PrivateRouteRoles";
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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [validate, setValidate] = useState(true);
  const [isLoggedIn, setLogin] = useState(false);
  const [userRecords, setUserRecords] = useState([]);

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
            setValidate={setValidate}
            validate={validate}
            path="/categories/products"
            exact
          >
            <Route exact path="/categories/products" component={Products} />
          </PrivateRouteRoles>

          <PrivateRouteRoles
            validate={validate}
            setValidate={setValidate}
            path="/categories/users/updateinfousers"
            exact
          >
            <Route
              exact
              component={Updateinfousers}
              path="/categories/users/updateinfousers"
              userRecords={userRecords}
              setUserRecords={setUserRecords}
            />
          </PrivateRouteRoles>

          {/* <PrivateRouteRoles
            validate={validate}
            setValidate={setValidate}
            path="/categories/users/updaterolusers"
            exact
          >
            <Route
              exact
              component={Updaterolusers}
              path="/categories/users/updaterolusers"
            />
          </PrivateRouteRoles> */}

          <PrivateRouteRoles
            validate={validate}
            setValidate={setValidate}
            path="/categories/users"
            exact
          >
            <Route
              exact
              path="/categories/users"
              component={Users}
              userRecords={userRecords}
              setUserRecords={setUserRecords}
            />
          </PrivateRouteRoles>

          <PrivateRoute
            validate={validate}
            setValidate={setValidate}
            path="/categories/sales"
            exact
          >
            <Route exact path="/categories/sales" component={Sales} />
          </PrivateRoute>

          <PrivateRoute
            validate={validate}
            setValidate={setValidate}
            path="/categories/register_sales"
            exact
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
            exact
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
