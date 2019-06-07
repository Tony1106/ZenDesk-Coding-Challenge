import React from "react";
import "./App.scss";
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
