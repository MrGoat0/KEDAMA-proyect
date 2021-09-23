
import React from 'react';

import Category from './Pages/selectCategory.jsx'
import Authentication from './Pages/auth.jsx'
import NotFound from './Pages/NotFound.jsx'
import Sales from './Pages/sales.jsx'
import Sellers from './Pages/sellers.jsx'
import Users from './Pages/users.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
       <Switch>
       <Route exact path="/categories" component={Category}/>
       <Route exact path="/categories/sales" component={Sales}/>
       <Route exact path="/categories/seller" component={Sellers}/>
       <Route exact path="/categories/users " component={Users}/>
       <Route exact path="/" component={Authentication}/>
       <Route exact component={NotFound}/>

 
     </Switch>
   
   
    </Router>
  );
}

export default App;
