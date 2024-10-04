import React from "react";
import { Form, Select, Button } from "antd";
import "./style.css";
// import { useForm } from "@refinedev/core";

const { Option } = Select;

const PartFilter: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
      <div className="filter-box">
        <h3 className="component-heading primary-color">Select Parts</h3>

        <Form
          form={form}
          layout="inline"
          onFinish={onFinish}
          className="custom-gap"
        >
          <Form.Item
            name="modal"
            rules={[{ required: true, message: "Please select a modal!" }]}
          >
            <Select placeholder="Select Modal">
              <Option value="-">Select Modal</Option>
              <Option value="volvo">Volvo</Option>
              <Option value="saab">Saab</Option>
              <Option value="mercedes">Mercedes</Option>
              <Option value="audi">Audi</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="body"
            rules={[{ required: true, message: "Please select a body type!" }]}
          >
            <Select placeholder="Select Body">
              <Option value="-">Select Body</Option>
              <Option value="volvo">Volvo</Option>
              <Option value="saab">Saab</Option>
              <Option value="mercedes">Mercedes</Option>
              <Option value="audi">Audi</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="year"
            rules={[{ required: true, message: "Please select a year!" }]}
          >
            <Select placeholder="Select Year">
              <Option value="-">Select Year</Option>
              <Option value="2024">2024</Option>
              <Option value="2023">2023</Option>
              <Option value="2022">2022</Option>
              <Option value="2021">2021</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select placeholder="Select Category">
              <Option value="-">Select Category</Option>
              <Option value="category1">Category 1</Option>
              <Option value="category2">Category 2</Option>
              <Option value="category3">Category 3</Option>
              <Option value="category4">Category 4</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary-button primary-background">
              Search Part Now
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
};

export default PartFilter;
