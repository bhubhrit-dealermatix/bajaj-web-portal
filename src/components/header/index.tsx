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
type RightMenuItem = Required<MenuProps>["items"][number];

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

const rightMenuItems: RightMenuItem[] = [
  {
    label: <Link to="/"><Avatar size={32} icon={<SearchOutlined />}/></Link>,
    key: "search",
  },
  {
    label: <Link to="/"><Avatar size={32} icon={<UserOutlined />} /></Link>,
    key: "user",
  },
  {
    label: <Link to="/shopping-cart"><Avatar size={32} icon={<ShoppingCartOutlined />}/></Link>,
    key: "cart",
  }
];

const index: React.FC = () => {
  const [mainMenu, setMainMenu] = useState("home");
  const onMenuClick: MenuProps["onClick"] = (e) => {
    setMainMenu(e.key);
  };
  const [rightMenu, setRightMenu] = useState('');
  const onRightMenuClick: MenuProps['onClick'] = (e) => {
    setRightMenu(e.key)
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
        <Menu onClick={onRightMenuClick} selectedKeys={[rightMenu]} mode="horizontal" items={rightMenuItems} />
      </div>
    </Header> 
  );
};

export default index;
