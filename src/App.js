import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import Nav from "./components/Nav"
import About from "./pages/About"
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/About">
        <About />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
