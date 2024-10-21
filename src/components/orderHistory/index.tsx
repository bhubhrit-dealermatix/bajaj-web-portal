import React, { useState } from "react";
import { Row, Col, Typography, Card, Tabs } from "antd";
import { ClockCircleOutlined, BoxPlotOutlined, CloseCircleOutlined , FilterOutlined } from "@ant-design/icons";
import './style.css';
import OrderStatus from "../orderStatus/index"; 
import OrderActive from "../orderActive/index";

const { Title } = Typography;
const { TabPane } = Tabs;

// Orders Data
const ordersData = [
  {
    orderNumber: "SO24050138",
    orderDate: "2024-May-20",
    dealer: "Gupta Sons",
    totalItems: 5,
    amount: "INR 23,237.36",
    status: "active",
  },
  {
    orderNumber: "SO24050139",
    orderDate: "2024-May-21",
    dealer: "Kumar Traders",
    totalItems: 8,
    amount: "INR 30,500.00",
    status: "delivered",
  },
  {
    orderNumber: "SO24050140",
    orderDate: "2024-May-22",
    dealer: "Sharma Agencies",
    totalItems: 3,
    amount: "INR 12,500.50",
    status: "cancelled",
  },
  // ... other orders
];

const OrderHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState("active");

  const filteredOrders = ordersData.filter(order => order.status === selectedFilter);

  const handleTabChange = (key: string) => {
    setSelectedFilter(key);
  };

  const renderContent = () => {
    switch (selectedFilter) {
      case "active":
        return (
          <Card>
            <OrderActive />
          </Card>
        );
      case "delivered":
        return (
          <>
            <OrderStatus orders={filteredOrders} />
          </>
        );
      case "cancelled":
        return (
          <>
            <OrderStatus orders={filteredOrders} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      <div className="orderHistory_wrapper">
        <Title level={3}>Order History</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={16} style={{padding:"0px"}}>
            {renderContent()}
          </Col>
          <Col xs={24} md={8}>
            <Tabs defaultActiveKey="active" onChange={handleTabChange} className="customTabs">
            <TabPane
                tab={
                  <span>
                    <FilterOutlined />
                    Filter
                  </span>
                }
                key="filter"
                disabled 
              >
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <ClockCircleOutlined />
                    Active
                  </span>
                }
                key="active"
              >
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <BoxPlotOutlined />
                    Delivered
                  </span>
                }
                key="delivered"
              >
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <CloseCircleOutlined />
                    Cancelled
                  </span>
                }
                key="cancelled"
              >
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderHistory;
