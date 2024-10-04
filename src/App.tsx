import React from "react";
import { Layout } from "antd";
import { Refine } from "@refinedev/core"; 
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/index";
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from "./pages/Product-details";
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
              <Route path="/product-details:id" element={<ProductDetails/>} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Refine>
    </BrowserRouter>
  );
};

export default App;
