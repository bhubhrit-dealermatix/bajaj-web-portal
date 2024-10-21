    import React from 'react';  
    import { Steps, Row, Col, Typography, Divider, Space, Flex } from "antd";
    import { CheckCircleFilled } from "@ant-design/icons";
    const { Step } = Steps;
    const { Text, Title, Link } = Typography;
    import './style.css';

    const orderData = {
        orderNumber: "SO24050138",
            orderDate: "2024-May-20",
        dealer: "Gupta Sons",
        totalItems: 5,
        amount: "INR 23,237.36",
    };

    const OrderActive: React.FC = () => {
        const OrderInfo = ({ order}) => (

            <div className='order-box'>
                <Row >
                    <Col span={24}>
                        <Row>
                            <Col  span={24} className='order-title'>
                            <Text strong >Order Number: </Text><Text strong>{order.orderNumber}</Text></Col>
                            <Col  span={24} className='order-content-detail'>
                                <div className='order-info-box'>
                                    <Text >Order Date: </Text><Text strong>{order.orderDate}</Text>
                                </div>
                                <div className='order-info-box'>
                                <Text >Dealer: </Text><Text strong>{order.dealer}</Text>
                                </div>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Divider/>
                    <Col span={24}>
                        <Row className='custom-flex'>
                            <Col className='order-title'>
                                <div> <Text >Total Items: </Text><Text strong>{order.totalItems}</Text></div>
                                 <div><Text >Amount: </Text><Text strong>{order.amount}</Text></div>
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
            <div className="Order_status_box">
                <Title level={4}>Order Status</Title>
                <Divider /> 
                <Steps current={1} size="small" className='orderActive_steps'>
                    <Step
                        title="Order Confirmed"
                        icon={<CheckCircleFilled />}
                        status="finish"
                    
                    />
                    <Step
                        title="Packed"
                        icon={<CheckCircleFilled />}
                        status="process"
                    
                    />
                    <Step
                        title="Shipped"
                        icon={<CheckCircleFilled />}
                        status="wait"
                    
                    />
                    <Step
                        title="Delivered"
                        icon={<CheckCircleFilled />}
                        status="wait"
                    
                    />
                </Steps>      
                <Divider className='custom-divider' />        
                                
                <OrderInfo order={orderData} />
            </div>
        );
    };
    
    export default OrderActive;