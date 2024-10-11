import React, { useState } from "react";
import { Table, Button, Card, Row, Col, Typography } from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import OrderSummary from "../orderSummaryCard/orderSummaryCard";
import { useLocation } from "react-router-dom";

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
            width: "120px",
            height: "45px",
            textAlign: "center",
            padding: "0",
            border: "1px solid #2680f5",
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
              color: "White",
              height: "29px",
              background: "#2680f5",
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
              color: "White",
              height: "29px",
              background: "#2680f5",
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

  return (
    <>
      <Title level={2} className="page-heading">{pageName === "checkout" ? "Checkout" : "Shopping Cart"}</Title>
      {pageName === "shopping-cart" ? (<Text>Buy <strong>₹500</strong> More to get <strong>Free Shipping</strong></Text>): ('')}
      <Row gutter={24} style={{marginTop: "20px"}}>
        <Col span={16}>
          {pageName === "shopping-cart" ?
            <Table columns={columns} dataSource={cartItems} pagination={false} bordered={false} style={{ backgroundColor: "#fff", borderRadius: "8px" }}/>
            : 
            "Check out page"
          }
        </Col>
        <Col span={8}>
          <OrderSummary totalItems={totalItems} subtotal={subtotal} savings={savings} tax={tax} pageName={pageName === "checkout"}/>
        </Col>
      </Row>
    </>
  );
};

export default ShoppingCart;
