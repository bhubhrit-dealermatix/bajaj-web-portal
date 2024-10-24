import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Avatar,
  Input,
  Checkbox,
} from "antd";
import { Dropdown, Space } from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import OrderSummary from "../orderSummaryCard/orderSummaryCard";
import DeliveryOptions from "../../components/deliveryOptions/index";
import { useLocation } from "react-router-dom";
import { Tabs } from "antd";
import "./style.css";
import hdfc from "../../images/hdfc.png";
import sbi from "../../images/sbi.png";
import payzapp from "../../images/payzApp-logo.png";
import olamoney from "../../images/olamoney-logo.png";
import mobikwik from "../../images/mobikwik-logo.png";
import type { CheckboxProps, MenuProps } from "antd";

const cashSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16602 11.8449C1.16602 10.4571 2.21068 9.33203 3.49935 9.33203H24.4994C25.788 9.33203 26.8327 10.4571 26.8327 11.8449V23.1525C26.8327 24.5403 25.788 25.6654 24.4994 25.6654H3.49935C2.21068 25.6654 1.16602 24.5403 1.16602 23.1525V11.8449Z"
      stroke="black"
      stroke-width="1.5"
    />
    <path
      d="M25.666 13.4167H25.0827C23.4719 13.4167 22.166 12.1108 22.166 10.5"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M25.666 21.582H25.0827C23.4719 21.582 22.166 22.8879 22.166 24.4987"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M2.33203 13.4167H2.91536C4.5262 13.4167 5.83203 12.1108 5.83203 10.5"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M2.33203 21.582H2.91536C4.5262 21.582 5.83203 22.8879 5.83203 24.4987"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M16.625 17.5C16.625 18.9497 15.4497 20.125 14 20.125C12.5503 20.125 11.375 18.9497 11.375 17.5C11.375 16.0503 12.5503 14.875 14 14.875C15.4497 14.875 16.625 16.0503 16.625 17.5Z"
      stroke="black"
      stroke-width="1.5"
    />
    <path
      d="M3.5 5.83203H24.5"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M5.83203 2.33203H22.1654"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const upiSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6167_9214)">
      <path
        d="M14.0007 25.6654C7.55715 25.6654 2.33398 20.4422 2.33398 13.9987C2.33398 7.5552 7.55715 2.33203 14.0007 2.33203C20.4442 2.33203 25.6673 7.5552 25.6673 13.9987C25.6673 20.4422 20.4442 25.6654 14.0007 25.6654ZM14.0007 23.332C16.476 23.332 18.85 22.3487 20.6003 20.5984C22.3507 18.848 23.334 16.4741 23.334 13.9987C23.334 11.5233 22.3507 9.14937 20.6003 7.39903C18.85 5.6487 16.476 4.66536 14.0007 4.66536C11.5253 4.66536 9.15133 5.6487 7.40099 7.39903C5.65065 9.14937 4.66732 11.5233 4.66732 13.9987C4.66732 16.4741 5.65065 18.848 7.40099 20.5984C9.15133 22.3487 11.5253 23.332 14.0007 23.332ZM8.16732 10.4987L11.6673 6.41536L15.1673 10.4987H12.834V15.1654H10.5007V10.4987H8.16732ZM19.834 17.4987L16.334 21.582L12.834 17.4987H15.1673V12.832H17.5007V17.4987H19.834Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6167_9214">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const walletSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16602 8.34485C1.16602 6.95706 2.21068 5.83203 3.49935 5.83203H24.4994C25.788 5.83203 26.8327 6.95706 26.8327 8.34485V19.6525C26.8327 21.0403 25.788 22.1654 24.4994 22.1654H3.49935C2.21068 22.1654 1.16602 21.0403 1.16602 19.6525V8.34485Z"
      stroke="black"
      stroke-width="1.5"
    />
    <path
      d="M17.5 14C17.5 15.933 15.933 17.5 14 17.5C12.067 17.5 10.5 15.933 10.5 14C10.5 12.067 12.067 10.5 14 10.5C15.933 10.5 17.5 12.067 17.5 14Z"
      stroke="black"
      stroke-width="1.5"
    />
    <path
      d="M4.66602 18.6641H8.16602"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M19.832 9.33203H23.332"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

const items: MenuProps["items"] = [
  {
    label: "@okaxis",
    key: "@okaxis",
  },
  {
    label: "@okhdfc",
    key: "@okhdfc",
  },
  {
    label: "@oksbi",
    key: "@oksbi",
  },
];

const { Title, Text } = Typography;
interface CartItem {
  key: string;
  product: string;
  price: number;
  quantity: number;
  imgUrl: string;
  discount: number;
  mrp: number;
  mpp: number;
  rating: number;
  Reviews: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      key: "1",
      product: "Crankcase LH",
      price: 800,
      quantity: 10,
      imgUrl:
        "https://srp-racingshop.com/media/image/product/19800/lg/gehaeuse-rl-kz-tm-r2-standard.png",
      discount: 10,
      mrp: 900,
      mpp: 800,
      rating: 5,
      Reviews: 142,
    },
    {
      key: "2",
      product: "Crankcase RH",
      price: 800,
      quantity: 10,
      imgUrl:
        "https://srp-racingshop.com/media/image/product/19800/lg/gehaeuse-rl-kz-tm-r2-standard.png",
      discount: 10,
      mrp: 900,
      mpp: 800,
      rating: 4.5,
      Reviews: 142,
    },
  ]);

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (_: string, record: CartItem) => (
        <Row gutter={[16, 16]} align="middle">
          <Col span={6}>
            <img
              src={record.imgUrl}
              alt={record.product}
              style={{ width: "60px", height: "60px", borderRadius: "8px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "red",
                color: "white",
                padding: "1px 5px",
                borderRadius: "3px",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              -{record.discount}%
            </div>
          </Col>
          <Col span={18}>
            <Text strong>{record.product}</Text>
            <br />
            <Rate
              className="rating-star"
              disabled
              allowHalf
              value={record.rating}
              style={{ fontSize: "14px" }} // Decrease font size of stars
            />
            <span style={{ fontSize: "12px", marginLeft: "5px" }}>
              ({record.Reviews})
            </span>
            <br />
            <Text>
              MPP: <strong>₹{record.mpp}</strong> | MRP:{" "}
              <strong>₹{record.mrp}</strong>
            </Text>
          </Col>
        </Row>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_: string, record: CartItem) => (
        <Card
          size="small"
          style={{
            display: "flex",
            alignItems: "center",
            width: "110px",
            height: "38px",
            textAlign: "center",
            padding: "0",
            border: "1px solid #006ad0",
          }}
        >
          <Button
            icon={<MinusOutlined />}
            onClick={() =>
              updateQuantity(record.key, Math.max(0, record.quantity - 1))
            }
            style={{
              marginRight: "5px",
              fontSize: "10px",
              color: "#fff",
              height: "30px",
              background: "#006ad0",
            }}
          />
          <Text style={{ margin: "0", fontSize: "15px", lineHeight: "24px" }}>
            {record.quantity}
          </Text>
          <Button
            icon={<PlusOutlined />}
            onClick={() => updateQuantity(record.key, record.quantity + 1)}
            style={{
              marginLeft: "5px",
              fontSize: "8px",
              color: "#fff",
              height: "30px",
              background: "#006ad0",
            }}
          />
        </Card>
      ),
    },
    {
      title: "Total",
      dataIndex: "price",
      key: "price",
      render: (_: string, record: CartItem) => (
        <Text>
          <strong>₹{record.price * record.quantity}</strong>
        </Text>
      ),
    },
    {
      title: "Clear Cart",
      key: "remove",
      render: (_: string, record: CartItem) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            danger
            onClick={() => removeItem(record.key)}
            style={{
              padding: 0,
              border: "none",
              background: "none",
              fontSize: "18px",
            }}
          >
            <CloseOutlined style={{ color: "grey", fontSize: "16px" }} />
          </Button>
        </div>
      ),
    },
  ];

  const updateQuantity = (key: string, newQuantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.key === key ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const removeItem = (key: string) => {
    const updatedItems = cartItems.filter((item) => item.key !== key);
    setCartItems(updatedItems);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const savings = 110;
  const tax = subtotal * 0.18;

  const location = useLocation();
  const pageName = location.pathname.split("/").pop();

  const setDefaultBank: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [tabPosition, setTabPosition] = useState('left');

  useEffect(() => {
    const handleResize = () => {
      setTabPosition(window.innerWidth <= 994 ? "top" : "left");
      console.log(tabPosition, "tabPosition");
      
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabsMenu = [
    {
      label: (
        <Text style={{ fontSize: "18px", fontWeight: "600" }}>
          Select Payment Method
        </Text>
      ),
      content: "",
      disabled: true,
    },
    {
      label: <div>{cashSVG} Net Banking</div>,
      content: (
        <Card
          style={{
            border: "1px solid #DFDFDF",
          }}
        >
          <Input
            placeholder="Search Banks"
            style={{
              borderColor: "#DFDFDF",
              padding: "8px 12px",
              marginBottom: "1rem",
            }}
          />
          <h3>Frequently Used Banks</h3>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={hdfc} width={"40px"} style={{ marginRight: "0.5rem" }} />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>HDFC</Text>
          </div>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={sbi} width={"40px"} style={{ marginRight: "0.5rem" }} />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
              State Bank Of India
            </Text>
            <Checkbox
              onChange={setDefaultBank}
              style={{ float: "right", width: "auto", margin: "0 0 0 auto" }}
            >
              Mark as Default
            </Checkbox>
          </div>
        </Card>
      ),
    },
    {
      label: <div>{upiSVG} UPI Payment</div>,
      content: (
        <Card
          style={{
            border: "1px solid #DFDFDF",
          }}
        >
          <h3>UPI ID</h3>
          <div
            style={{
              borderBottom: "1px solid #dfdfdf",
              display: "flex",
              alignItems: "center",
              margin: "1rem 0 0.5rem",
            }}
          >
            <Input
              placeholder="Username"
              size="large"
              style={{
                border: "none",
                borderRadius: "unset",
                flex: "1",
              }}
            />
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()} style={{ color: "#000" }}>
                <Space>
                  Select Bank
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <p style={{ fontSize: "15px" }}>
            A payment request will be forwarded to this UPI ID
          </p>
          <Checkbox
            onChange={setDefaultBank}
            style={{ width: "auto", marginTop: "1rem", color: "#999" }}
          >
            Save this UPI ID for faster payments
          </Checkbox>
        </Card>
      ),
    },
    {
      label: <div>{walletSVG} Pay From Wallet</div>,
      content: (
        <Card style={{ border: "1px solid #dfdfdf" }}>
          <h3>Wallet</h3>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={payzapp}
              width={"40px"}
              style={{ marginRight: "0.5rem" }}
            />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>PayZapp</Text>
          </div>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={olamoney}
              width={"40px"}
              style={{ marginRight: "0.5rem" }}
            />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
              Ola Money
            </Text>
          </div>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={mobikwik}
              width={"40px"}
              style={{ marginRight: "0.5rem" }}
            />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
              MobiKwik
            </Text>
          </div>
        </Card>
      ),
    },
    {
      label: <div>{walletSVG} Credit / Debit Card</div>,
      content: (
        <Card
          style={{
            border: "1px solid #DFDFDF",
          }}
        >
          <Input
            placeholder="Search Banks"
            style={{
              borderColor: "#DFDFDF",
              padding: "8px 12px",
              marginBottom: "1rem",
            }}
          />
          <h3>Frequently Used Banks</h3>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={hdfc} width={"40px"} style={{ marginRight: "0.5rem" }} />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>HDFC</Text>
          </div>
          <div
            style={{
              padding: "12px",
              border: "1px solid #dfdfdf",
              borderRadius: "6px",
              marginTop: "0.75rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={sbi} width={"40px"} style={{ marginRight: "0.5rem" }} />
            <Text style={{ fontSize: "16px", fontWeight: "600" }}>
              State Bank Of India
            </Text>
            <Checkbox
              onChange={setDefaultBank}
              style={{ float: "right", width: "auto", margin: "0 0 0 auto" }}
            >
              Mark as Default
            </Checkbox>
          </div>
        </Card>
      )},
    {
      label: <div>{walletSVG} Cash On Delivery</div>,
      content: "",
    },
  ];

  return (
    <div
      className={pageName === "shopping-cart" ? "shopping-cart" : (pageName === "checkout" ? "checkout" : "payments")}
    >
      <Title level={2} className="page-heading">
      {pageName === "shopping-cart" ? "Shopping Cart" : (pageName === "checkout" ? "Checkout" : "Payments")}
      </Title>
      {pageName === "shopping-cart" ? (
        <Text>
          Buy <strong>₹500</strong> More to get <strong>Free Shipping</strong>
        </Text>
      ) : (
        ""
      )}
      <Row gutter={{ xs: 8, sm: 16, lg: 24 }} style={{ marginTop: "20px" }}>
        <Col
          xs={{ flex: "100%" }}
          lg={{ flex: "calc(200%/3)" }}
          className="padding-left-0 padding-0"
        >
          {pageName === "shopping-cart" ? (
            <Table
              columns={columns}
              dataSource={cartItems}
              pagination={false}
              bordered={false}
              style={{ backgroundColor: "#fff", borderRadius: "8px" }}
            />
          ) : (pageName === "checkout" ? 
            <DeliveryOptions /> : (
              <Tabs
                defaultActiveKey="1"
                tabPosition={tabPosition}
                style={{ height: "auto" }}
                items={tabsMenu.map((e, i) => {
                  const id = String(i);
                  return {
                    label: e.label,
                    key: id,
                    disabled: e.disabled,
                    children: e.content,
                  };
                })}
              />
            )
          )}
        </Col>
        <Col
          xs={{ flex: "100%" }}
          lg={{ flex: "calc(100%/3)" }}
          className="padding-right-0 padding-0"
        >
          <OrderSummary
            totalItems={totalItems}
            subtotal={subtotal}
            savings={savings}
            tax={tax}
            pageName={pageName}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCart;
