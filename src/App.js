import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import './App.css';

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path="/">
      <Landing />
      </Route>
      </Switch>

    </Router>
  );
}

export default App;
