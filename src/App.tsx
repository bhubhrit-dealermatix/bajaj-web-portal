import React from "react";
import { Layout } from "antd";
import { Refine } from "@refinedev/core"; 
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Refine dataProvider={dataProvider("https://api.fake-rest.refine.dev")}>
        <Layout className="layout">
          <Header />
          <Layout.Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Product />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/shopping-cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
