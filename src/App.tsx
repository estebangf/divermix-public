import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';
import About from './Pages/About';
import ProductView from './Pages/ProductView';
import CategoryView from './Pages/CategoryView';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/categories/:category">
            <CategoryView />
          </Route>
          <Route path="/products/:name">
            <ProductView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
