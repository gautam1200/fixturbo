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
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}

        {/* Redirect old paths, optional */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
