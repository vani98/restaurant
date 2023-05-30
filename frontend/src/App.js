import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MenuList from "./pages/Menu/MenuList";

function App() {
  return (
    <>
      <BrowserRouter>
        <img
          className="hero-image"
          src="/images/fondoRestaurant.png"
          alt="Fondo de imagen"
        ></img>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Menu/:category" element={<MenuList />} />
            <Route path="/Nosotros" element={<AboutUs />} />
            <Route path="/Contacto" element={<Contact />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
