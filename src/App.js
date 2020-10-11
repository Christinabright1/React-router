import React from "react";
import "./styles.css";
import About from "./About";
import Nav from "./Nav";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Itemdetails from "./Itemdetails";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="shop/:id" component={Itemdetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);
