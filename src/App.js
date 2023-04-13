import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ReactDOM from "react-dom";
import "./App.css";
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element = { <Home />} />
        <Route path="/services" exact element = { <Services />} />
        <Route path="/products" exact element = { <Products />} />
        <Route path="/sign-up" exact element = { <SignUp />} />
      </Routes>
    </>
  );
}

export default App;
