import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
import './style.css';

const { Title, Text } = Typography;

export default function RecentOrders() {
  return (
    <Card className="recent-orders-card" bordered={false}>
      <div className="primary-bg py-3 px-3">
        <Title level={5} className="mb-0 text-white">
          Recent Orders
        </Title>
      </div>
      <div className="order-info">
        <Row justify="space-between" align="middle" className="p-3">
          <Col>
            <Space direction="vertical">
              <Text type="secondary">Order Number</Text>
              <Text className="primary-color mb-0">
                <b>#1234567</b>
              </Text>
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Text type="secondary">Delivery Time</Text>
              <Text className="primary-color mb-0">
                <b>11:00 am</b>
              </Text>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="p-3">
        <Title level={4} className="mb-0">
          Order Status
        </Title>
      </div>
    </Card>
  );
}
