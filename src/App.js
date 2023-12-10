import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Header from "./composant/Header/Header.jsx";
import Footer from "./composant/Footer/Footer.jsx";
import Error from "./pages/Erreur/Error.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/accommodation/:id" element={<Accommodation />} />

        <Route path="/About" element={<About />} />

        <Route path="*" element={<Error />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
