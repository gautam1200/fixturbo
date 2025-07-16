import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import './App.css';

// Import page components
import Home from "../src/components/Herosection";
import About from './components/About';
import Services from "./components/Services";
import Contact from "./components/Contact";
import Product from "./components/Product";
import ResponsiveDrawer from "./components/Addmin";
import Productditels from "./components/Productditels";
import Cart from "./components/Cart";
import Adminpenal from "./components/Addmin";
import Add from "./components/Add";
import Ad from "./components/Ad";
import Servicess from "./components/Servicess";
import Textsave from "./components/Login";
import Images from "./components/Iamges";


function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        
    
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicess" element={<Servicess />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Productditels />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminpenal" element={<Adminpenal />} />
        <Route path="/gallery" element={ <Images />} />
      </Routes>
      {/* <Textsave/> */}
      {/* <Cart/> */}
      {/* <Add/> */}
      {/* <Product/> */}
      {/* <ResponsiveDrawer />  */}
      {/* <Ad/> */}
      {/* <Adminpenal/> */}
    </>
  );
}

export default App;
