import React, { useState } from "react";
import { Row, Col, Typography, Divider, Space, Card, List } from "antd";
import { ClockCircleOutlined, BoxPlotOutlined, CloseCircleOutlined, FilterOutlined } from "@ant-design/icons";
import './style.css';
import OrderStatus from "../orderStatus/index"; 
import OrderActive from "../orderActive/index";


const { Text, Title, Link } = Typography;

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

const filters = [
  { key: 'active', label: 'Active', icon: <ClockCircleOutlined className="filter-custom-icon" /> },
  { key: 'delivered', label: 'Delivered', icon: <BoxPlotOutlined className="filter-custom-icon" /> },
  { key: 'cancelled', label: 'Cancelled', icon: <CloseCircleOutlined className="filter-custom-icon" /> },
];

const OrderHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState("active");

  const handleFilterClick = (filterKey : string ) => setSelectedFilter(filterKey);

  const filteredOrders = ordersData.filter(order => order.status === selectedFilter);

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
          <Col xs={24} md={16}>
            {renderContent()}
          </Col>
          <Col xs={24} md={8}>
            <div className="filterBox">
              <Space direction="vertical" style={{ width: "100%", gap: "0px" }}>
                <Space direction="horizontal" className="filter-title-box">
                  <FilterOutlined className="filter-custom-icon" />
                  <Title level={5} className="filter-title">Filters</Title>
                </Space>
                <List>
                  {filters.map(({ key, label, icon }) => (
                    <List.Item
                      key={key}
                      className={`filter-list ${selectedFilter === key ? "active-filter" : ""}`}  // Add active class conditionally
                      onClick={() => handleFilterClick(key)}
                      style={{ cursor: 'pointer' }}
                    >
                      {icon}
                      <span className={selectedFilter === key ? "filter-text active-filter-text" : "filter-text"} style={{ marginLeft: "15px" }}>
                        {label}
                      </span>
                    </List.Item>
                  ))}
                </List>
              </Space>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OrderHistory;
