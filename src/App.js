import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { buyerReview, sellerReview } from "./components/Reviews";

import "./App.css"; // Import CSS at the end

function App() {
  return (
    <div>
      <Header />
      <Routes>      
        <Route path='/header' element={<Header />} />
        <Route path='/herosection' element={<HeroSection />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/buyer' element={<buyerReview />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>

   
      <HeroSection />
      <Projects />
  
      <Contact />
      <Footer />
      {/* {buyerReview} */}
      {/* {sellerReview} */}
    </div>
  );
}

export default App;













// 




// import logo from './logo.svg';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React from "react";

// import "./App.css";;
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Footer from "./components/Footer";
// import Projects from "./components/Projects";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Contact from "./components/Contact";
// // import Reviews from "./components/Reviews"
// import { buyerReview, sellerReview } from "./components/Reviews";
// import { Routes, Route } from 'react-router-dom';

// // import 'bootstrap/dist/css/bootstrap.min.css';

// //

// function App() {
//   return (
    
//     <div>
//       <Routes>
        
//       <Route path='/header' element={<Header/>} />
//       <Route path='/herosection' element={<HeroSection/>} />
//         <Route path='/projects' element={<Projects/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/footer' element={<Footer/>} />
        
//       </Routes>
//       <Header />
//       <HeroSection />
//       <Projects />
//       <Contact />
//       <Footer />
//       {/* <buyerReview /> */}
      
      
//       {buyerReview}
//       {sellerReview}
//     </div>
  
//   );
// }

// export default App;
