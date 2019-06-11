import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Home from "./screens/Home/";
import ReadMe from "./screens/ReadMe/";
import About from "./screens/About/";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/readme" component={ReadMe} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
