import React, { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Button, Dropdown, Input, Space, Form, Row, Col } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import logo from "../../images/DAGLogo.png";
import dropdownOverlay from "../../images/dropdown-overlay.png";
import Scanner from "../../images/scanner.svg";
import "./style.css";

const { Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
type RightMenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { label: <Link to="/">Home</Link>, key: "home" },
  { label: <Link to="/products">Products</Link>, key: "products" },
  { label: <Link to="/orders">My Orders</Link>, key: "orders" },
  { label: <Link to="/about">About Us</Link>, key: "about" },
  { label: <Link to="/contact">Contact Us</Link>, key: "contact" },
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

const Index: React.FC = () => {
  const [mainMenu, setMainMenu] = useState("home");
  const onMenuClick: MenuProps["onClick"] = (e) => {
    setMainMenu(e.key);
  };
  const [rightMenu, setRightMenu] = useState('');
  const onRightMenuClick: MenuProps['onClick'] = (e) => {
    setRightMenu(e.key)
  }
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  const dropdownMenu = (
    <div className="custom-dropdown" style={{ backgroundImage: `url(${dropdownOverlay})` }}>
      <div className="dropdown-close">
        <Button icon={<CloseOutlined />} onClick={handleDropdownClose} />
      </div>
      <div className="dropdown-title">
        <h3 className="component-heading primary-color">Ensure Part Authenticity</h3>
        <p>Verify your spare parts' authenticity by checking official markings and sourcing from our official website.</p>
      </div>
      <div className="product-code-box">
        <Form name="basic" layout="vertical" initialValues={{ inputField: "" }}>
          <Row gutter={[12, 8]} className="d-flex">
            <Col span={20}>
              <Form.Item name="inputField" className="custom-input" rules={[{ required: true, message: "Please enter Part No." }]}>
                <Input placeholder="Please enter a value" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button className="scanner-btn">
                  <img src={Scanner} alt="Scanner" />
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="validate_btn">
              Validate Now
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <Header className={`header ${isScrolled ? "scrolled" : ""} ${isHomePage ? "" : "scrolled"}`}>
      <div className="logo">
        <img src={logo} alt="DAG Logo" className={isScrolled ? "logo-scrolled" : ""} />
      </div>
      <Menu onClick={onMenuClick} selectedKeys={[mainMenu]} mode="horizontal" items={items} className="navbar-menu" />
      <div className="right-navbar-menu">
        <Dropdown
          overlay={dropdownMenu}
          trigger={['click']}
          visible={dropdownVisible} 
          onOpenChange={(flag) => setDropdownVisible(flag)} 
          placement="bottomRight"
        >
          <Button type="primary" className="primary-background primary-button" style={{ marginRight: "8px", textTransform: "uppercase" }}>
            <Space>Check Authenticity</Space>
          </Button>
        </Dropdown>
        <Menu onClick={onRightMenuClick} className={isScrolled ? "icon-scrolled" : "custom-icon"} selectedKeys={[rightMenu]} mode="horizontal" items={rightMenuItems} />
      </div>
    </Header>
  );
};

export default Index;
