import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Footer/>
      </div>
    </Router>
  )
}
export default App;
