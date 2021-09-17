import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Nav from "./components/Nav/Nav"
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
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>

    </Router>
  );

}


export default App;
