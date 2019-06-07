import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Header from "./components/Header";
import Home from "./screens/Home/";
import ReadMe from "./screens/ReadMe/";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" component={Home} />
        <Route path="/readme" component={ReadMe} />
      </div>
    </Router>
  );
}

export default App;
