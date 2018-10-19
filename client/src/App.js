import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Service from "./components/Service";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Service/> 
    </div>
  </Router>
);

export default App;
