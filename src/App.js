// import logo from './logo.svg';
// import Header from './components/Header';
// import Herosection from './components/Herosection';
// import Cart from './components/Cart';
// import Gallery from './components/Gallery';
// import SlickGoTo from './components/Slaider';
// import ScrollToTop from './components/Scrollbuteon';
// import SlickGo from './components/Slider';
// import Member from './components/Member';
// import Resizable from './components/Slaider';
// import Footers from './components/Footer';
// import About from './components/About';
// import { Route, Router, Routes } from 'react-router-dom';
// import { Switch } from '@mui/material';


// function App() {
//   return (
//     <>
//     {/* <ScrollToTop/> */}
//     {/* <SlickGo/> */}
//     {/* <Header/> */}
//     {/* <Herosection/> */}
//     {/* <Cart/> */}
//     {/* <Gallery/> */}
//     {/* <SlickGoTo/> */}
//     {/* <Member/> */}
//     {/* <Resizable/> */}
//     {/* <Footers/> */}
//     <Router>
//     {/* <About/> */}
//       <Routes>
//         <Route path="/" element={<Herosection />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//     </Router>



//     </>
//   );
// }

// export default App;




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
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";

function App() {
  return (
    <>
      {/* <Header /> */}


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicess" element={<Servicess />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Productditels />} />
        <Route path="/" element={<Add />} />
        <Route path="/ad" element={<Ad />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminpenal" element={<Adminpenal/>} />
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
