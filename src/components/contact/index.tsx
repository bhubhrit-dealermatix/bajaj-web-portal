import React from "react";
import { Form, Input, Button, Select, Typography, Row, Col, Card } from "antd";
import ContactBanner from  "../../images/contactUs-banner.png";
import {
    UserOutlined,
    PhoneOutlined,
    CarOutlined,
    EnvironmentOutlined,
    ShopOutlined,
  } from "@ant-design/icons";
import dropdownOverlay from "../../images/dropdown-overlay.png";
import './style.css';

const { Option } = Select;
const { Title, Text } = Typography;

const ContactForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form values: ", values);
  };

  return (
    <div className="contact-container" style={{ backgroundImage: `url(${ContactBanner})` }}>
      <Row gutter={[16, 16]} justify="center" align="middle" className="full-height">
        <Col xs={24} md={12} className="bike-image-container">
          
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} className="contact-card" style={{ backgroundImage: `url(${dropdownOverlay})` }}>
            <Title level={3} className="custom-text">Enquire Now</Title>
            <Text className="custom-para">
              We’re here to help. Chat to our friendly team 24/7 and get set up
              and ready to go in just 5 minutes.
            </Text>
            <Form
              form={form}
              name="contact_form"
              layout="vertical"
              onFinish={handleSubmit}
              className="contact-form"
            >
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input placeholder="Full Name"  className="custom-form-field" prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                rules={[{ required: true, message: "Please enter your mobile number" }]}
              >
                <Input placeholder="Mobile Number" className="custom-form-field" prefix={<PhoneOutlined />} />
              </Form.Item>

              <Form.Item
                name="model"
                rules={[{ required: true, message: "Please select a model" }]}
              >
                <Select placeholder={<><CarOutlined /> Model</>} className="custom-form-field">
                  <Option value="model1">Model 1</Option>
                  <Option value="model2">Model 2</Option>
                  <Option value="model3">Model 3</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="location"
                rules={[{ required: true, message: "Please select a location" }]}
              >
                <Select placeholder={<><EnvironmentOutlined /> Location</>}  className="custom-form-field">
                  <Option value="location1">Location 1</Option>
                  <Option value="location2">Location 2</Option>
                  <Option value="location3">Location 3</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="dealer"
                rules={[{ required: true, message: "Please select a dealer" }]}
              >
                <Select placeholder={<><ShopOutlined /> Dealer</>}  className="custom-form-field">
                  <Option value="dealer1">Dealer 1</Option>
                  <Option value="dealer2">Dealer 2</Option>
                  <Option value="dealer3">Dealer 3</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block className="primary-background primary-button">
                  GET OTP
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
