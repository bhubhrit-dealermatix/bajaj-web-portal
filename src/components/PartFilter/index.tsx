import React from "react";
import { Form, Select, Button, Row, Col } from "antd";
import "./style.css";
import filterBackground from '../../images/backgroundFilter.png'

interface FormValues {
  modal: string;
  body: string;
  year: string;
  category: string;
}

const { Option } = Select;

const options = {
  modal: [
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
  ],
  body: [
    { value: "sedan", label: "Sedan" },
    { value: "hatchback", label: "Hatchback" },
    { value: "suv", label: "SUV" },
    { value: "coupe", label: "Coupe" },
  ],
  year: [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ],
  category: [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    { value: "category4", label: "Category 4" },
  ],
};

interface SelectItemProps {
  name: keyof FormValues;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const SelectItem: React.FC<SelectItemProps> = ({ name, label, options }) => (
  <Form.Item
    name={name}
    rules={[{ required: true, message: `Please select a ${label.toLowerCase()}!` }]}
  >
    <Select placeholder={`Select ${label}`} className="ant-select-selector">
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

const SearchPartFilter: React.FC = () => {
  const [form] = Form.useForm<FormValues>();

  const onFinish = (values: FormValues) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="main-container">
    <div className="filter-box" style={{ backgroundImage: `url(${filterBackground})` }}>
      <h3 className="component-heading primary-color heading_padding">Search Parts</h3>

      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12} md={5} lg={5}>
            <SelectItem name="modal" label="Modal" options={options.modal} />
          </Col>
          <Col xs={24} sm={12} md={5} lg={5}>
            <SelectItem name="body" label="Body" options={options.body} />
          </Col>
          <Col xs={24} sm={12} md={5} lg={5}>
            <SelectItem name="year" label="Year" options={options.year} />
          </Col>
          <Col xs={24} sm={12} md={5} lg={5}>
            <SelectItem name="category" label="Category" options={options.category} />
          </Col>
          <Col xs={24} sm={24} md={4} lg={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="primary-button primary-background">
                Search Now
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
    </div>
  );
};

export default SearchPartFilter;
