import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import Header from "./composant/Header";
import Footer from "./composant/Footer";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apartment" element={<Apartment />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
