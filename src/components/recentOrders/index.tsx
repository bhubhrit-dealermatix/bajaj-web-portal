import React from 'react';
import { Card, Row, Col, Typography, Space  } from 'antd';
import './style.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const { Title, Text } = Typography;
const circleStyle = (color) => ({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: color,
  border: '3px solid white',
});
const { Step } = Steps;


export default function RecentOrders() {
  return (
    <Card className="recent-orders-card" bordered={false}>
      <div className="primary-bg " style={{ padding: '14px'}}>
        <Space>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <Title level={5} className="mb-0 text-white">
              Recent Orders
            </Title>
        </Space>
       
      </div>
      <div className="order-info">
        <div className=' order-detail'>
          <Row justify="space-between" align="middle" className="p-3">
            <Col>
              <Space direction="vertical" className='noGap'>
                <Text type="secondary">Order Number</Text>
                <Text className="primary-color mb-0">
                  <b>#1234567</b>
                </Text>
              </Space>
            </Col>
            <Col>
              <Space direction="vertical" className='noGap'>
                <Text type="secondary">Delivery Time</Text>
                <Text className="primary-color mb-0">
                  <b>11:00 am</b>
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
        
        <div className="order-status  ">
          <Title level={4} className="mb-0">
            Order Status
          </Title>
          <Steps current={1} labelPlacement="vertical" className='custom-steps'>
              <Step 
                title="Pending" 
                description="24/08/2024" 
                icon={<div style={circleStyle('#006AD0')}></div>} 
              />
              <Step 
                title="Approved" 
                description="24/08/2024" 
                icon={<div style={circleStyle('#006AD0')}></div>} 
              />
              <Step 
                title="Delivered" 
                description="26/08/2024" 
                icon={<div style={circleStyle('#9D9D9D')}></div>} 
              />
            </Steps>
      </div>
      </div>
    
    </Card>
  );
}
