import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProductsPricing from "./pages/ProductsPricing";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: 40 }}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/team' element={<Team/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/pricing' element={<ProductsPricing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;