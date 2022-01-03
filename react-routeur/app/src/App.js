import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProductPricing from "./pages/ProductPricing";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/ProductPricing' element={<ProductPricing/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/Team' element={<Team/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;