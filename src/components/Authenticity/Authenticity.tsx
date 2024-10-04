import React from "react";
import { Layout } from "antd";
import { Button, Form, Input } from "antd";
import authencityImg from "../../images/authencityImg.jpg";

// type LayoutType = Parameters<typeof Form>[0]["layout"];

const flexStyle = {
  background: `url('${authencityImg}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative" as React.CSSProperties["position"],
};

const layoutStyle = {
  width: "75%",
  margin: "auto",
  padding: "3rem 0",
};

const EnsureAuthenticity: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Layout style={flexStyle}>
      <div style={layoutStyle}>
        <Layout.Content style={{width: "40%"}} className="text-white">
          <h2 className="component-heading">
            <b>Ensure Part Authenticity</b>
          </h2>
          <p style={{marginBottom: "1.5rem"}}>
            Verify your spare parts' authenticity by checking official markings
            and sourcing from our official website.
          </p>
          <Form layout={"inline"} form={form}>
            <Form.Item>
              <Input className="text-input" placeholder="Enter Part No." />
            </Form.Item>
            <Form.Item>
              <Button className="primary-button primary-background text-white" type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Layout.Content>
      </div>
    </Layout>
  );
};

export default EnsureAuthenticity;
