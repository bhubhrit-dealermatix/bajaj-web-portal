import React from "react";
import { Card, Divider, Row, Button, Typography } from "antd";
import { Link } from "react-router-dom";

interface CartProps {
  totalItems: number;
  subtotal: number;
  savings: number;
  tax: number;
  pageName: boolean;
}
const { Title, Text } = Typography;

const Cart: React.FC<CartProps> = ({
  totalItems,
  subtotal,
  savings,
  tax,
  pageName,
}) => {
  const dynamicLink = pageName ? "/checkout" : "/shopping-cart";
  return (
    <>
      <Card
        bordered={false}
        style={{
          borderRadius: "10px",
          backgroundColor: "#F9FBFF",
          padding: "15px",
          border: "1px solid #DFDFDF"
        }}
      >
        <Title level={4} style={{ marginBottom: "0", lineHeight: "normal", textAlign: "center" }}>
          Order Summary
        </Title>
        <Divider style={{ margin: "15px 0" }} />
        <Row justify="space-between" style={{ marginBottom: "16px" }}>
          <Text>Subtotal ({totalItems} items):</Text>
          <Text style={{ fontSize: "16px", fontWeight: "600" }}>
            ₹{subtotal}
          </Text>
        </Row>
        <Row justify="space-between" style={{ marginBottom: "16px" }}>
          <Text>Savings:</Text>
          <Text style={{ fontSize: "16px", fontWeight: "600", color: "red" }}>
            - ₹{savings}
          </Text>
        </Row>
        <Row justify="space-between" style={{ marginBottom: "16px" }}>
          <Text>Tax collected:</Text>
          <Text style={{ fontSize: "16px", fontWeight: "600" }}>₹{tax}</Text>
        </Row>
        <Row justify="space-between" style={{ marginBottom: "16px" }}>
          <Text>Shipping:</Text>
          <Text>Calculated at checkout</Text>
        </Row>
        <Divider />
        <Row justify="space-between">
          <Text>
            <strong>Total:</strong>
          </Text>
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
            ₹ {subtotal - savings + tax}
          </Text>
        </Row>
        <Link
          to={dynamicLink}
          style={{ marginTop: "5px", width: "100%", display: "block" }}
        >
          <Button
            className="primary-button primary-background text-white"
            block
            disabled={!pageName}
          >
            Proceed to checkout {" > "}
          </Button>
        </Link>
        <Text
          style={{
            display: "block",
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          <a
            href="/create-account"
            style={{
              fontWeight: "normal",
              color: "grey",
              textDecoration: "underline",
            }}
          >
            Create an account
          </a>
          {"  "}and get <strong>₹500 bonus</strong>
        </Text>
      </Card>
      <Card
        bordered={false}
        style={{
          borderRadius: "8px",
          marginTop: "20px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F9FBFF",
          height: "70px",
          border: "1px solid #DFDFDF"
        }}
      >
        <Title level={4} style={{ display: "inline", fontSize: "16px" }}>
          %&nbsp; Apply Promo Code
        </Title>
        <span style={{ fontSize: "20px", position: "absolute", right: "20px" }}>
          +
        </span>
        <Row gutter={8}></Row>
      </Card>
    </>
  );
};

export default Cart;
