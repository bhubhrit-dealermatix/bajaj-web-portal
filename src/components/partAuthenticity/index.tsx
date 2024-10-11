import React from "react";
import { Layout } from "antd";
import { Button, Form, Input , Row, Col } from "antd";
import authencityImg from "../../images/authencityImg.jpg";
import Scanner from "../../images/scanner.svg";
import "./style.css";

const flexStyle = {
  background: `url('${authencityImg}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative" as React.CSSProperties["position"],
};



const EnsureAuthenticity: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Layout style={flexStyle}>
      <div className="main-container" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <Layout.Content style={{width: "100%" , maxWidth: "50%"}} className="text-white">
          <h2 className="component-heading">
            <b>Ensure Part Authenticity</b>
          </h2>
          <p style={{marginBottom: "1.5rem" , maxWidth: "40ch"}}>
            Verify your spare parts' authenticity by checking official markings
            and sourcing from our official website.
          </p>
          <Form layout={"inline"} form={form} className="custom-form">
          <Row gutter={[12, 8]} className="d-flex">
            <Col span={20}>
              <Form.Item name="inputField" className="custom-input" rules={[{ required: true, message: "Please Part No." }]}>
                <Input placeholder="Please enter a value" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button className="scanner-btn">
                  <img src={Scanner} alt="Scanner"></img>
                </Button>
              </Form.Item>
            </Col>
          </Row>
            <Form.Item>
            <Button type="primary" className="primary-button primary-bg" >
            Validate Now
            </Button>
            </Form.Item>
            
          </Form>
        </Layout.Content>
      </div>
    </Layout>
  );
};

export default EnsureAuthenticity;
