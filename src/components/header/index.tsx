import React, { useState } from "react";
import { Layout, Menu, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../../images/DAGLogo.png";
import "./style.css";

const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/products">Products</Link>,
    key: "products",
  },
  {
    label: <Link to="/orders">My Orders</Link>,
    key: "orders",
  },
  {
    label: <Link to="/about">About Us</Link>,
    key: "about",
  },
  {
    label: <Link to="/contact">Contact Us</Link>,
    key: "contact",
  },
];

const rightMenuItems = [
  { key: "search", icon: <SearchOutlined /> },
  { key: "user", icon: <UserOutlined /> },
  { key: "cart", icon: <ShoppingCartOutlined /> },
];

const index: React.FC = () => {
  const [mainMenu, setMainMenu] = useState("home");
  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setMainMenu(e.key);
  };
  function onRightMenuClick(event) {
    switch (event.target.dataset.icon) {
      case "search":
        console.log(event.target.dataset.icon, "button clicked");
        break;
      case "user":
        console.log(event.target.dataset.icon, "button clicked");
        break;
      case "cart":
        console.log(event.target.dataset.icon, "button clicked");
        break;
      default:
        console.log("default button clicked");
    }
  }
  return (
    <Header className="header">
      <div className="logo">
        <img src={logo} alt="DAG Logo" />
      </div>
      <Menu onClick={onMenuClick} selectedKeys={[mainMenu]} mode="horizontal" items={items} className="navbar-menu" />
      <div className="right-navbar-menu">
        <Button type="primary" className="primary-background primary-button" style={{ marginRight: "8px", textTransform: "uppercase" }} >
          Check Authenticity
        </Button>
        {rightMenuItems.map((e, i) => {
          return (
            <Avatar key={i} size={32} icon={e.icon} onClick={onRightMenuClick}
            />
          );
        })}
      </div>
    </Header> 
  );
};

export default index;
