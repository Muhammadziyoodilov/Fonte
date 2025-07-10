import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./layout/Footer";
import Blog from "./pages/blog/Blog";
import { Inside } from "./pages/blog/blog-inside/Inside";
import Contact from "./pages/Contact";
import Products from "./pages/products/Products";
import Product from "./pages/products/product/Product";
import About from "./pages/About";
import Comand from "./pages/comand/Comand";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Inside />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/comand" element={<Comand />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
