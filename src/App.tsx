import React from "react";
import { Layout } from "antd";
import { Refine } from "@refinedev/core"; 
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
// import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MainFooter from "./components/footer";
import "./App.css";
import ProductDetailPage from './pages/Product-details';
import OrderHistory from "./components/orderHistory";
import ContactUs from "./pages/ContactUs";


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
              <Route path="/product/:itemId" element={<ProductDetailPage />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/shopping-cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout.Content>
          <MainFooter/>
        </Layout>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
