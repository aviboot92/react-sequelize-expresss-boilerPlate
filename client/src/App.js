import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
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