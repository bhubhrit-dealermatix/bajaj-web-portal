import React, { useState } from "react";
import { Row, Col, Typography, Divider, Space, Rate } from "antd";
const { Text, Link } = Typography;
import './style.css';

const OrderStatus = ({ orders }) => {
  const [rating, setRating] = useState(0);

  const handleChange = (value) => {
    setRating(value);
    console.log(`User rated: ${value}`);
  };

  // Component to render each order
  const OrderInfo = ({ order }) => (
    <div className="order-box Order_status_box">
      <Row>
        <Col span={24}>
          <Row className="order-detailFlex">
            <Col span={18}>
              <div className="order-title">
                <Text strong>Order Number: </Text>
                <Text strong>{order.orderNumber}</Text>
              </div>
              <div className="order-content-detail">
                <div className="order-info-box">
                  <Text>Order Date: </Text>
                  <Text strong>{order.orderDate}</Text>
                </div>
                <div className="order-info-box">
                  <Text>Dealer: </Text>
                  <Text strong>{order.dealer}</Text>
                </div>
                <div className="order-info-box">
                  <Text>Status: </Text>
                  <Text strong className="green-text">{order.status}</Text>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <p className="rating-title">Rate the product:</p>
              <Rate onChange={handleChange} value={rating} className="rating" />
            </Col>
          </Row>
        </Col>
        <Divider />
        <Col span={24}>
          <Row className="custom-flex">
            <Col className="order-title">
              <div>
                <Text>Total Items: </Text>
                <Text strong>{order.totalItems}</Text>
              </div>
              <div>
                <Text>Amount: </Text>
                <Text strong>{order.amount}</Text>
              </div>
            </Col>
            <Col>
              <Space direction="horizontal" style={{ marginTop: "10px", gap: "20px" }}>
                <Link href="#" className="order_link">Invoice Print</Link>
                <Link href="#" className="order_link">View Order Details</Link>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      {orders.map((order, index) => (
        <OrderInfo key={index} order={order} />
      ))}
    </div>
  );
};

export default OrderStatus;
